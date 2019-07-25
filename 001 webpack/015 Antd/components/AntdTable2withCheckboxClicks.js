import React,{Fragment} from 'react';
import {Row, Col, Table} from 'antd';


const columns = [
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
];

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
      selectedRowKeys:[]
    };
    
    onRowClick=(data)=>{
      return {
        onClick: () => {
          console.log('single click');
          // if (selectedRowKeys.indexOf(record.key) >= 0) {
          //   selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
          // } else {
          //   selectedRowKeys.push(record.key);
          // }
          // this.setState({ selectedRowKeys });
        },
        onDoubleClick: () => {
          console.log('double click');
          // this.setState({ visible: true });
        }
      };
    };
  	render() {
      console.log('---выбранные позиции',this.state.selectedRowKeys);
      //wordBreak: 'break-all' !нужен обязательно
      const rowSelection={
        selectedRowKeys: this.state.selectedRowKeys, //массив с выбранными сюда, а не в props
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          this.setState({selectedRowKeys:selectedRowKeys});
        },
        getCheckboxProps: record => ({
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name,
        }),
        hideDefaultSelections: true,
        selections: [
          {
            key: 'diselect all',
            text: 'Diselect All',
            onSelect: (e) => {
              console.log('-e',e);
              this.setState({
                selectedRowKeys: []
              });
            },
          },
        ],
      }
      return (<Fragment>
                <h2>Чекбоксы & Клик по строке</h2>
                <div style={{width:'400px', wordBreak: 'break-all'}}>
                  <Table
                    bordered={ true }
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: 2 }} //на сколько разбивать
                    scroll={{ y: 240, x:1}}

                    rowSelection={rowSelection}
                    onRow={this.onRowClick}
                  />,
                  </div>
              </Fragment>);

  	}

}



export default AntdTable2withCheckboxClicks;
