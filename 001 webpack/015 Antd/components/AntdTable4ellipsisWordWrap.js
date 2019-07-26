import React,{Fragment} from 'react';
import {Row, Col, Table} from 'antd';
import './AntdTable.less';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
    className: 'Ellipsis'
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
    className: 'DisableWordWrap'
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

class AntdTable4ellipsisWordWrap extends React.PureComponent {
    
  	render() {
    //wordBreak: 'break-all' !нужен обязательно
		return (<Fragment>
              <h2>Многоточие & Отключение переноса слов</h2>
              <div style={{width:'700px'}}>
                <Table
                  className={'TableDefault'}
                  bordered={ true }
                  columns={columns}
                  dataSource={data}
                  scroll={{ y: 240, x:true }}
                  pagination={{ pageSize: 10 , size:'small', showQuickJumper:true}} //объект пагинации
                  rowSelection={rowSelection}
                
                />,
                </div>
            </Fragment>);

  	}

}



export default AntdTable4ellipsisWordWrap;
