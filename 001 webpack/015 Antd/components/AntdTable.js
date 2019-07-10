import React,{Fragment} from 'react';
import {Row, Col, Table} from 'antd';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '30%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: '15%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King21313 123123dwedwedwd131 123  123233 ${i}`,
    age: 32,
    address: `London32131 23131dwdwdwedwedewdw312  13123 213 3 12313, Park Lane no. ${i}`,
  });
}


// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

class AntdTable extends React.PureComponent {

  	render() {
    //wordBreak: 'break-all' !нуже обязательно
		return (<Fragment>
              <div>Table</div>
              <div style={{width:'400px', wordBreak: 'break-all'}}>
                <Table
                  bordered={ true }
                  columns={columns}
                  dataSource={data}
                  rowSelection={rowSelection}
                  pagination={{ pageSize: 50 }}
                  scroll={{ y: 240 }} />,
                </div>
            </Fragment>);

  	}

}



export default AntdTable;
