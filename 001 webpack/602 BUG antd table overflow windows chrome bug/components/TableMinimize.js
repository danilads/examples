import React, {PureComponent} from 'react';

import TableSource from "./TableSource";
import PropTypes from "prop-types";


import './TableMinimize.less';
import ReactResizeDetector from "react-resize-detector";
////----README
//Минимальная таблица - без меню/сортировки/фильтров/драг (имеет такие же стили как другие таблицы)

//(высота таблицы зависит от родителя)
//(ширина таблица принимает в зависимости от родителя)

////----PROPS
//props.className - string - добавить кастомный класс для кастомизации стилей( в стиль можно прокинуть класс с подменой констант см. TableSource.less )

//props.columns - array - для формирования колонок (см. readme -  "TableDocument")
//props.data - array - данные
//props.tableId - string - уникальный id для сохранения настроек в localStorage создаем в ctLocalStorageTable.js

//props.pagDisable - bool - если true - отключить пагинацию (также будет выключен отступ сверху - paddingPagTop)


//props.cbClick - func - колбэк по клику - возвращает (index, key(из props.data), true/false)
//props.cbDoubleClick - func - колбэк по дабл клику - возвращает (index, key(из props.data))
//props.cbChecked - func - (если прислать то будет колонка с чекбоксами) будет возвращать массив чекбоксов при выборе (массив key(из props.data))



class TableMinimize extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      columns: props.columns, //нужно записывать именно здесь
      data:[],
      sortDataIndex: '',
      sortType: '',
      height: 0
    }
  }
  static propTypes = {
    className: PropTypes.string,

    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    tableId: PropTypes.string.isRequired,

    pagDisable: PropTypes.bool,

    cbClick: PropTypes.func,
    cbDoubleClick: PropTypes.func,
    cbChecked: PropTypes.func,
  };




  //react-resize-detector
  onResizeScreen=(w,h) => {
    this.setState({height:h});
  };

  modifyArr = (arr) =>{

    let result = arr.map(it=>{
      it.className = 'TitleEllipsis BodyEllipsis';
      return it;
    });

    return [...result];
  };

  render() {
    let {data, className, cbClick, cbDoubleClick, cbChecked, tableId, pagDisable} = this.props;
    let {columns, height} = this.state;



    return (<div className={"TableMinimize"}>
      <TableSource
        minimize
        className={className}

        tableId={tableId}

        data={data}
        columns={this.modifyArr(columns)} //add Ellipsis style

        pagDisable={pagDisable}

        tableHeight={height}

        cbClick={cbClick}
        cbDoubleClick={cbDoubleClick}
        cbChecked={cbChecked}


      />
      <ReactResizeDetector handleHeight onResize={this.onResizeScreen}/>
    </div>)
  }

}

export default TableMinimize;
