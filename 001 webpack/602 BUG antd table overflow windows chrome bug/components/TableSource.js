import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ReactDragListView from "react-drag-listview";
import {Table, Icon} from 'antd';
import ReactResizeDetector from 'react-resize-detector';
import { Empty } from "antd";



import {
  ResizeComponent,
  limitResize,
  dragFormArray,
  formPaginationObj,
} from './TableSourceUtils.js'


import './TableSource.less';


//----Readme
// Это базовая таблица - движок - (не использовать как компонент для отображения данных)

//TODO
// (localStorage) - берет уникальный  props.tableId , если есть данные выставляет (порядок/width/fixed/className)
//  - className:'TitleEllipsis' - Заголовок в хэдере не будет переноситься
//  - className:'TitleWordBreak' - Заголовок в будет разбиваться на по буквам при переносе
//  - fixed: 'left'
//  - width: 100

//----PROPS
//props.minimize - bool - если данный атрибут есть, то таблица превращается в обычную таблицу (меню/фильтрации/сортировки/драг - неработает)
//  - список атрибутов которые будут раотать

//props.className - string - добавить кастомный класс для кастомизации стилей( в стиль можно прокинуть класс с подменой констант см. TableSource.less )

//props.tableId - string - уникальный id таблицы, нужен для хранения в localStorage настроек табюлицы
//props.data - array - данные таблицы (ключ должен соответсвовать dataIndex в columns)
//props.columns - array - формирует колонки


//props.menuComponent - func - реакт компонент который строит меню (работает как конструкутор в зависимости от props.data.dataIndex)
//props.cbSort - func - возвращает( ) функция сортировки - передается в props.menuComponent
//props.cbFilter - func - возвращает( ) функция фильтрации - передается в props.menuComponent

//props.tableHeight - number/bool - высота таблица (если нужно растянуть на всю высоту - используйте ReactResizeDetector)
//  - если true/false - скрола не будет (таблица растянется на всю высоту)
//(ширину таблица принимает в зависимости от родителя)

//props.pagDisable - bool - если true - отключить пагинацию (также будет выключен отступ сверху - paddingPagTop)
//props.pagSize - number - пагинация - на сколько разбиваем страницы

//props.cbClick - func - колбэк по клику - возвращает (index, key(из props.data), true/false)
//props.cbDoubleClick - func - колбэк по дабл клику - возвращает (index, key(из props.data))
//props.cbChecked - func - (если прислать то будет колонка с чекбоксами) будет возвращать массив чекбоксов при выборе (массив key(из props.data))

//----PROPS CONTROLLED - для контролируемой таблицы
//props.loading - bool - включать ли спинер загрузки

//props.pagTotal - number - общее кол-во (если контролируем пагинацию)
//props.pagCurrent - number - текущая страница (если контролируем пагинацию)
//props.cbPaginationHandle - func - отрабатывает при нажатии на изменение страницы пагинцаии (вернет number)

class TableSource extends PureComponent{
  static propTypes = {
    minimize: PropTypes.bool,

    className: PropTypes.string,

    tableId : PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,

    menuComponent: PropTypes.func,
    cbSort: PropTypes.func,
    cbFilter: PropTypes.func,

    tableHeight: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
    ]),

    pagDisable: PropTypes.bool,
    pagSize: PropTypes.number,


    cbClick: PropTypes.func,
    cbDoubleClick: PropTypes.func,
    cbChecked: PropTypes.func,

    //----PROPS CONTROLLED
    loading: PropTypes.bool,
    pagTotal: PropTypes.number,
    pagCurrent: PropTypes.number,
    cbPaginationHandle: PropTypes.func,

  };
  static defaultProps = {
    tableHeight: 500,
    loading: false, // спинер "loading"
    pagTotal: 0, //общее кол-во
    pagSize: 100, //пагинация - на сколько разбиваем страницы
  };
  state={
    columns:[],
    data: [],

    selectedRowKeys:[], //массив чекбоксов
    rowOnFocus: null, //выбранная позиция

    pagCurrent: 1, //текущая страница

    ////Внутренние настройки
    //авторесайз
    tableWidth: 0, //для кнопки авто-ресайза колонок
    addBlockWidth: 50,  //50 - длинна блока с "вложенностью"(пока не реализован)
    checkBoxWidth: 60,  //60 - длинна блока с "чекбоксами"

    //паддинг для того чтобы пагинцаия влезла
    paddingPagTop: 22,

    //ресайз (ограничение)
    resizeMin: 100,
    resizeMax: 500,
  };

  //data и columns - должны храниться в state
  componentDidMount() {
    this.setState({columns:this.props.columns});
    if(typeof this.props.pagCurrent === "number"){
      this.setState({pagCurrent:this.props.pagCurrent});
    }
    //если пагинация отключена то паддинг сверху отключаем
    if(this.props.pagDisable){
      this.setState({paddingPagTop:0});
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(typeof this.props.pagCurrent === "number" && this.state.pagCurrent!==this.props.pagCurrent){
      this.setState({pagCurrent:this.props.pagCurrent});
    }
  }

  //resize
  handleResize = index => (e, { size }) => {
    let {resizeMin, resizeMax} = this.state;
    this.setState(({ columns }) => {
      return limitResize(index, size, columns, resizeMin, resizeMax);
    });
  };

  ////CLICK / DOUBLE-CLICK
  onRowClick=(data, index)=>{
    let {cbClick, cbDoubleClick} = this.props;
    return {
      onClick: () => {
        if(typeof cbClick === 'function'){
          let result = false;
          if(data.key!==this.state.rowOnFocus){
            result=data.key;
          }
          cbClick(index, data.key, !(result===false));
          //--Устанавливаем стили для выбранной позиции
          this.setState({rowOnFocus:result});
        }
      },
      onDoubleClick: () => {
        //дублируем одинарный клик
        if(typeof cbClick === 'function'){
          cbClick(index, data.key, true);
        }

        if(typeof cbDoubleClick === 'function') {
          cbDoubleClick(index, data.key);
          //--Устанавливаем стили
          this.setState({rowOnFocus:data.key});
        }
      }
    };
  };

  ////ВЫБРАННАЯ ПОЗИЦИЯ - ставим стили
  selectRow=(e)=>{
    let {rowOnFocus} = this.state;
    //ставит стиль выбранной позиции
    if(rowOnFocus===e.key){
      return "focusedRow"
    }
    else{
      return ""
    }
  };

  //drag columns
  onDragEnd=(fromIndex, toIndex)=>{
    this.setState({ columns: dragFormArray(this.state.columns, fromIndex, toIndex, this.props.cbChecked) });
  };
  //баг с кликом
  dragClick=()=>{
    let thElem = this.container.current && this.container.current.getElementsByClassName('react-resizable');
    for(let i=0;thElem.length>i;i++){
      thElem[i].removeAttribute('draggable')
    }
  };



  ////МЕНЮ КОЛОНКИ
  getColumnSearchProps = (obj, prevState) => ({

    // handleFilter: ƒ (dataIndex, value)
    // handleSort: ƒ (dataIndex, value)


    filterDropdown: ({ confirm: close }) => {
      //README (вся сортировка и фильтрация идет напрямую через роодителя компонент меню
      //obj - объект из массива state/props columns
      //close - функция закрытия самого меню
      //cbSort - функция сортировки, приходит из родителя props.cbSort
      //cbFilter - функция фильтрации, приходит из родителя props.cbFilter
      let Menu = this.props.menuComponent;
      return Menu
        ?
        <Menu obj={obj} prev={prevState} cbSort={this.props.cbSort} cbFilter={this.props.cbFilter} close={close}/>
        :
        <div></div>
    },
    filterIcon: filtered => (
      <Icon type={"bars"} style={{ color: filtered ? '#1DA57A' : undefined }} />
    ),
  });
  //pagination
  paginationHandle=(pagination)=>{
    //пагинцаия CONTROLLED
    if(typeof this.props.pagCurrent === "number" && this.props.pagCurrent!==pagination.current){
      this.props.cbPaginationHandle && this.props.cbPaginationHandle(pagination.current)
    }
    else if(this.state.pagCurrent!==pagination.current){
      this.setState({pagCurrent: pagination.current});
    }
  };
  //setFix
  setFixed=(dataIndex)=>{
    //модифицируем state
    let fixedPos = [];
    let modifiedColumns = [];
    for(let i=0;this.state.columns.length>i;i++){
      if(this.state.columns[i] && this.state.columns[i].dataIndex===dataIndex){
        let obj = {...this.state.columns[i]};
        if(obj.hasOwnProperty('fixed')){
          delete obj['fixed'];
          fixedPos.push(obj);
        }
        else{
          obj.fixed = 'left';
          fixedPos.push(obj);
        }


      }
      else{
        let obj = {...this.state.columns[i]};
        if(obj.hasOwnProperty('fixed')){
          delete obj['fixed'];
        }
        modifiedColumns.push(obj);

      }
    }

    let result = fixedPos.concat(modifiedColumns);
    this.setState({columns:result},()=>{
      //баг с высотой фиксированной колонки
      let elem = this.container.current && this.container.current.getElementsByClassName('ant-table-body')[0];
      let vScroll = elem.scrollTop;
      let hScroll = elem.scrollLeft;
      elem.scrollTo(hScroll,vScroll+1);
    });
  };

  ////ФУНКЦИЯ АВТОРЕСАЙЗА КОЛОНОК
  setDeafaultSizeWidth=()=>{
    let {cbChecked} = this.props;
    let {columns, tableWidth, checkBoxWidth, resizeMin} = this.state;
    //вычитаем ширину неподконтрольных блоков
    // checkBoxWidth: 60,  //60 - длинна блока с "чекбоксами"
    // addBlockWidth: 50,  //50 - длинна блока с "вложенностью"(пока не реализован)
    let result = [];
    let width = (tableWidth-(cbChecked?checkBoxWidth:0))/columns.length;
    for(let i=0;columns.length>i;i++){

      //если ширина меньше минимального размера устанавливаем минимальный размер
      if(width<resizeMin){
        result.push({...columns[i],width:resizeMin});
      }
      else{
        result.push({...columns[i],width:width});
      }
    }



    this.setState({columns:result});
  };

  //react-resize-detector
  onResizeScreen=(w,h) => {
    this.setState({tableWidth:w});
  };

  container=React.createRef();

  render(){
    let {className, data, loading, pagDisable, cbChecked, tableHeight, pagTotal, pagSize, minimize} = this.props;
    let {selectedRowKeys, pagCurrent, paddingPagTop} = this.state;
    let tableContentHeight = tableHeight;

    ////ВЫСТАВЛЯЕМ ВЫСОТУ ТАБЛИЦЫ
    if(typeof tableHeight === 'number'){
      let headerElem = this.container.current && this.container.current.getElementsByClassName('ant-table-thead')[0];
      //paddingPagTop - это паддинг сверху для меню таблицы и пагинации
      //баг с высотой - 0/1 - это компенсация бордера если есть паддинг(при pagDisable - паддинг paddingPagTop = 0)
      tableContentHeight = tableHeight - paddingPagTop - (pagDisable?0:1) - (headerElem ? headerElem.offsetHeight:0);
    }




    const columns = this.state.columns.map((obj, index) => {
      let modify = {...obj};



      //баг с шириной заголовка
      if(this.state.columns.length-1 === index){
        if(typeof obj.className === 'string'){
          modify.className=obj.className+' lastResize';
        }
        else{
          modify.className='lastResize';
        }
      }


      //resize
      modify.onHeaderCell = column => ({
        width: column.width,
        onResize: this.handleResize(index),
      });

      //добавляем иконки в правое меню
      if(!minimize){
        modify =  {...modify,
          ...this.getColumnSearchProps(obj, modify),  //menu
          title:<div>
            <div className={`${obj.fixed?'dragItemDis ':''}dragItem`}><Icon onClick={this.dragClick} type={"drag"} /></div>   {/* drag icon */}
            <div onClick={()=>this.setFixed(obj.dataIndex)} className={`fixedIcon ${obj.fixed?"fixedIcon-visible":""}`}><Icon type={"bars"}/></div>   {/* fixed icon */}
            <div className={'sortStatus'}>
              {modify.sortData==='ascend'&& <Icon type={"bars"}/>}
              {modify.sortData==='descend'&&<Icon type={"bars"}/>}
              {modify.filterData&&<Icon type={"bars"}/>}
            </div>

            {modify.title}
          </div>,
        };
      }
      else{
        modify =  {...modify, title:<div>{modify.title}</div>};
      }


      return modify;
    });

    if(this.state.columns.length!==0) columns.push({}); //заглушка при использовнии fixed

    ////CHECKBOX
    const rowSelection={
      selectedRowKeys: selectedRowKeys, //массив с выбранными сюда, а не в props
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({selectedRowKeys:selectedRowKeys},
          ()=>{this.props.cbChecked && this.props.cbChecked(this.state.selectedRowKeys);}
        );
      },
    };


    //если приходит пустая data (был баг - небыло горизонтального скрола)
    //вставляем кастомную заглушку
    if(data.length===0){
      let bodyElem = this.container.current && this.container.current.getElementsByClassName('ant-table-tbody')[0];
      if(bodyElem && bodyElem.offsetWidth){
        bodyElem.innerHTML = '<div class="emptyDivForAntdNoData"><br/></div>'
      }
    }
    else{
      let bodyElem = this.container.current && this.container.current.getElementsByClassName('emptyDivForAntdNoData')[0];
      if(bodyElem && bodyElem.offsetWidth){
        bodyElem.remove();
      }
    }

    // console.log('---TableSource columns', columns);
    // console.log('---TableSource data', data);
    return (
      <div style={{position:'relative', paddingTop: paddingPagTop+'px'}}>

        {/* нужен для выставлении автовысоты */}
        <div ref={this.container}>
          <ReactDragListView.DragColumn
            onDragEnd={this.onDragEnd}
            nodeSelector={"th"}
            handleSelector={".dragItem"}
          >
            <Table
              className={`${className?className+" ":""}TableSource`}
              bordered
              columns={columns}
              dataSource={data}
              scroll={{ y: tableContentHeight, x:true}}
              components={ResizeComponent}
              pagination={formPaginationObj(pagDisable, pagSize, pagCurrent, pagTotal)}
              rowSelection={cbChecked ? rowSelection : null}
              rowClassName={this.selectRow}
              onRow={this.onRowClick}
              onChange={this.paginationHandle}
              loading={loading}
              size={minimize?"small":"default"}
            /></ReactDragListView.DragColumn>
        </div>
        <ReactResizeDetector handleWidth onResize={this.onResizeScreen}/>

      </div>)
  }
}


export default TableSource;