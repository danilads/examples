import React,{Fragment} from 'react';
import {Row, Col, Table} from 'antd';
import { Resizable } from 'react-resizable';
import './AntdTable6sorting.less';

const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable width={width} height={0} onResize={onResize}>
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
    note: Math.round(1 - 0.5 + Math.random() * (9999 - 1 + 1)),
    description: <div>ВЛОЖЕННОСТЬ</div>
  });
}

class AntdTable6sorting extends React.PureComponent {
  state = {
    selectedRowKeys:[],
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
        sorter: (a, b) => a.note - b.note,
      },
      {
        title: 'Action',
        key: 'action',
        render: () => <a href="javascript:;">Delete</a>,
        width: 100,
      },
      {
        title: '',
        dataIndex: 'empty', //заглушка при использовнии fixed
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

  render() {
    //resize
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));
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

    return (<div style={{width:'400px'}}>
        <h2>сортировка в колонке</h2>
        <Table
          className={'TableDefault'}
          bordered
          components={this.components}
          columns={columns}
          dataSource={data}
          rowSelection={{}}
          scroll={{ y: 240, x:1 }}
          expandedRowRender={data => data.description}

          rowSelection={rowSelection}
          onRow={this.onRowClick}
        />
      </div>);
  }

}



export default AntdTable6sorting;
