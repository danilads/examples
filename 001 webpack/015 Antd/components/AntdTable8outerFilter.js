import React,{Fragment} from 'react';
import {Row, Col, Table} from 'antd';
import { Resizable } from 'react-resizable';
import './AntdTable.less';
//README
//фильтруемые и сортируемые позиции должны обязательно содержать поля sortOrder / filteredValue
//sortOrder:null ('ascend'/'descend'/null)
//filteredValue: null  ([4] (значения береться из filters value))
const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable width={width} height={0} onResize={onResize} handle={<div onClick={e=>{e.preventDefault();e.stopPropagation();}} style={{border:'1px dashed red',width:"100%",position:'absolute',bottom:'0',left:'0',height:'10px'}}></div>}>
      <th {...restProps} />
    </Resizable>
  );
};

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    date: `Edward King21313 123123dwedwedwd131 123  123233 ${i}`,
    amount: i,
    type: `London London London 32131 23131dwdwdwedwedewdw312  13123 213 3 12313, Park Lane no. ${i}`,
    name: Math.round(1 - 0.5 + Math.random() * (2 - 1 + 1))===1?"Jim":"John",
    note: Math.round(1 - 0.5 + Math.random() * (9999 - 1 + 1)),
    description: <div>ВЛОЖЕННОСТЬ</div>
  });
}

class AntdTable8outerFilter extends React.PureComponent {
  state = {
    paginationCurrent:0,
    selectedRowKeys:[],
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        width: 100,
        filters: [
          {
            text: 'Jim',
            value: 'Jim',
          },
          {
            text: 'John',
            value: 'John',
          }
        ],
        filteredValue: null,
        filterMultiple: false,
        onFilter: (value, data) => data.name === value,
      },
      {
        title: 'Date',
        dataIndex: 'date',
        width: 100,
        className: 'DisableWordWrap'
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        width: 100,
        sortOrder: 'descend', // 'ascend'/'descend'/null !сортировка может работать только на одном поле
        sorter: (a, b) => a.amount - b.amount,
      },
      {
        title: 'Type',
        dataIndex: 'type',
        width: 100,
        className: 'Ellipsis'
      },
      {
        title: 'Note',
        dataIndex: 'note',
        width: 100,
        sortOrder: null,
        sorter: (a, b) => a.note - b.note,
        filters: [
          {
            text: 'x',
            value: 1,
          },
          {
            text: 'xx',
            value: 2,
          },
          {
            text: 'xxx',
            value: 3,
          },{
            text: 'xxxx',
            value: 4,
          },
        ],
        filteredValue: [4], //умолчательное состояние - массив value  [value,value]
        filterMultiple: false,
        onFilter: (value, data) => data.note.toString().length === value,
      },
      {
        title: 'Action',
        key: 'action',
        render: () => <a href="javascript:;">Delete</a>,
        width: 100,
      }
    ],
  };
  


  //resize
  components = {
    header: {
      cell: ResizeableTitle,
    },
  };


  //вынести в отдельную функцию
  //запоминает предыдущее состояние
  remmberPrev=(func)=>{
    var prev=[];
    //Замыкание
    return function() {
      let result
      if(prev[arguments[2]]===void 0){
        result=arguments[0]-arguments[1];
      }
      else{
        result=arguments[0]-prev[arguments[2]];
      }
      prev[arguments[2]]=arguments[0];
      arguments[0]=result;
  
      return func.apply(this, arguments);
    }
  }

  //resize count diff
  countDifference = this.remmberPrev(e=>e);
  //resize
  handleResize = index => (e, { size }) => {
    
    this.setState(({ columns }) => {3
      const nextColumns = [...columns];

      //Данная функция фиксит баг с ресайзом
      let updatedSize = nextColumns[index].width + this.countDifference(size.width, nextColumns[index].width, index);

      //лимит ресайза ТАКЖЕ нужно указать в стилях th,td min-width

      if(updatedSize<100){
        updatedSize=100;
      }
      if(updatedSize>500){
        updatedSize=500;
      }
      

      nextColumns[index] = {
        ...nextColumns[index],
        width: updatedSize,
      };
      return { columns: nextColumns };
    });
  };
  //row click
  onRowClick=(data)=>{
    return {
      onClick: () => {
        console.log('single click');
      },
      onDoubleClick: () => {
        console.log('double click');
      }
    };
  };

  //изменение пагинации/фильтра/сортировки
  //в этой функции мутируем
  handleTableChange = (pagination, filters, sorter) => {
    console.log('---pagination',pagination);
    console.log('---filters',filters);
    console.log('---sorter',sorter);

    let updatedColumns = [...this.state.columns];
    for(let i=0;updatedColumns.length>i;i++){
      //Если в позиции columns содержится filteredValue 
      if(Object.keys(updatedColumns[i]).includes('filteredValue')){
        for(let key in filters){
          if(key===updatedColumns[i].dataIndex){
            updatedColumns[i].filteredValue = filters[key];
            break;
          }
        }
      }
      //Если в позиции колонки содержится sortOrder
      if(Object.keys(updatedColumns[i]).includes('sortOrder')){
          if(sorter.field===updatedColumns[i].dataIndex){
            updatedColumns[i].sortOrder = sorter.order
          }
          else{
            updatedColumns[i].sortOrder = null;
          }
      }
    }

    console.log('---updatedColumns',updatedColumns);
    this.setState({paginationCurrent:pagination.current,columns:updatedColumns});
  };

  render() {
   

    //resize
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));
    columns.push({}); //заглушка при использовнии fixed

    //row select
    const rowSelection={
      selectedRowKeys: this.state.selectedRowKeys, //массив с выбранными сюда, а не в props
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.setState({selectedRowKeys:selectedRowKeys});
      },
      hideDefaultSelections: true,
      selections: [
        {
          key: 'diselect all',
          text: 'Diselect All',
          onSelect: (e) => {
            console.log('-e',e);
            this.setState({selectedRowKeys: []});
          },
        },
      ],
    }

    return (<div style={{width:'1000px'}}>
        <h2>Кнопки внешнего фильтра</h2>
        <div>для сортировки нужно мутировать state.columns - для встроеной в antd фильтрации  есть props onChange</div>
        <div>
          {/* мутируем state.columns (везде ставим sortOrder=null) */}
          <button onClick={()=>{
            let updatedColumns = [...this.state.columns];
            for(let i=0;updatedColumns.length>i;i++){
              if(Object.keys(updatedColumns[i]).includes('sortOrder')){
                updatedColumns[i].sortOrder=null;
              }
            }
            this.setState({columns:updatedColumns});
          }}>clear Sorting</button>

          {/* мутируем state.columns (везде ставим filteredValue=null) */}
          <button onClick={()=>{
            let updatedColumns = [...this.state.columns];
            for(let i=0;updatedColumns.length>i;i++){
              if(Object.keys(updatedColumns[i]).includes('filteredValue')){
                updatedColumns[i].filteredValue=null;
              }
            }
            this.setState({columns:updatedColumns});
          }}>clear Filters</button>

          {/* мутируем state.columns (везде ставим sortOrder=null, кроме нужной позиции sortOrder='ascend') */}
          <button onClick={()=>{
            let updatedColumns = [...this.state.columns];
            for(let i=0;updatedColumns.length>i;i++){
              if(Object.keys(updatedColumns[i]).includes('sortOrder') && updatedColumns[i].dataIndex === 'amount'){
                updatedColumns[i].sortOrder='ascend';
              }
              else{
                updatedColumns[i].sortOrder=null;
              }
            }
            this.setState({columns:updatedColumns});
          }}>set Sort Amount Ascend</button>

          {/* мутируем state.columns (ставим фильтр только в нужной позиции filteredValue=["Jim"]) */}
          <button onClick={()=>{
            let updatedColumns = [...this.state.columns];
            for(let i=0;updatedColumns.length>i;i++){
              if(Object.keys(updatedColumns[i]).includes('filteredValue') && updatedColumns[i].dataIndex === 'name'){
                updatedColumns[i].filteredValue=['Jim'];
              }
            }
            this.setState({columns:updatedColumns});
          }}>set Filter Name Jim</button>
        </div>
        <Table
          className={'TableDefault'}
          bordered
          columns={columns}
          dataSource={data}
          components={this.components}
          scroll={{ y: 240, x:true }}
          pagination={{ pageSize: 10 ,current:this.state.paginationCurrent, size:'small', showQuickJumper:true}} //объект пагинации
          rowSelection={{}}
          expandedRowRender={data => data.description}

          rowSelection={rowSelection}
          onRow={this.onRowClick}
          onChange={this.handleTableChange}

    
        />
      </div>);
  }

}



export default AntdTable8outerFilter;