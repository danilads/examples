import React,{Fragment} from 'react';
import {Row, Col, Table} from 'antd';
import './AntdTable.less';


//README
//AntdTable2withCheckboxClicks (Чекбоксы & Клик по строке)
//Чекбоксы


const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King21313 123123dwedwedwd131 123  123233 ${i}`,
    age: i,
    address: `London London London 32131 23131dwdwdwedwedewdw312  13123 213 3 12313, Park Lane no. ${i}`,
  });
}


class AntdTable2withCheckboxClicks extends React.PureComponent {
    state={
      selectedRowKeys:[],
      columns:[
        {
          title: 'Name',
          dataIndex: 'name',
          width: 150,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          width: 150,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          width: 150,
        }
      ]
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
      console.log('---выбранные позиции',this.state.selectedRowKeys);
      
      const columns = this.state.columns;

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

      return (<Fragment>
                <h2>Чекбоксы & Клик по строке</h2>
                <div style={{width:'700px'}}>
                  <Table
                    className={'TableDefault'}
                    bordered={ true }
                    columns={columns}
                    dataSource={data}
                    scroll={{ y: 240, x:true}}
                    pagination={{ pageSize: 10 , size:'small', showQuickJumper:true}} //объект пагинации
                    rowSelection={rowSelection}
                    onRow={this.onRowClick}
                  />,
                  </div>
              </Fragment>);

  	}

}



export default AntdTable2withCheckboxClicks;
