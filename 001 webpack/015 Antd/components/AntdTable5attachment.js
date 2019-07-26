import React,{Fragment} from 'react';
import {Row, Col, Table} from 'antd';
import { Resizable } from 'react-resizable';
import './AntdTable.less';

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
    note: 'teacher',
    description: <div>ВЛОЖЕННОСТЬ</div>
  });
}

class AntdTable5attachment extends React.PureComponent {

  state = {
    columns: [
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
      },
      {
        title: 'Action',
        key: 'action',
        render: () => <a href="javascript:;">Delete</a>,
        width: 100,
      }
    ],
  };

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

  
  countDifference = this.remmberPrev(e=>e);

  handleResize = index => (e, { size }) => {
    
    this.setState(({ columns }) => {3
      const nextColumns = [...columns];

      //Данная функция фиксит баг с ресайзом
      let updatedSize = nextColumns[index].width + this.countDifference(size.width, nextColumns[index].width, index);

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

  render() {
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));
    columns.push({}); //заглушка при использовнии fixed

    return (<div style={{width:'400px'}}>
        <h2>Вложеность строки</h2>
        <Table
          className={'TableDefault'}
          bordered
          columns={columns}
          dataSource={data}
          scroll={{ y: 240, x:true }}
          pagination={{ pageSize: 10 , size:'small', showQuickJumper:true}} //объект пагинации
          rowSelection={{}}
          components={this.components}
          expandedRowRender={data => data.description}

        />
      </div>);
  }

}



export default AntdTable5attachment;
