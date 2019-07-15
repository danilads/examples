import React,{Fragment} from 'react';
import {Row, Col, Table, Divider, Tag} from 'antd';

import './AntdTable1.less';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  },
];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King21313 123123dwedwedwd131 123  123233 ${i}`,
    age: i,
    address: `London London London 32131 23131dwdwdwedwedewdw312  13123 213 3 12313, Park Lane no. ${i}`,
    tags: i%2===0?['cool', 'teacher']:['loser'],
  });
}


class AntdTable1 extends React.PureComponent {

  	render() {
    // горизонтальный скорл нельзя использовать scroll={{ x:450 }}, вместо него используем оберкту с {overflow:'auto'} т.к. в библиотеке есть баг с шириной колонок
    // 
		return (<Fragment>
              <div>Table</div>
              <div style={{ width: '500px'}}>
                <Table
                  className={'TableDefault'}
                  bordered={ true }
                  columns={columns}
                  dataSource={data}
                  pagination={{ pageSize: 50 }} //на сколько разбивать
                  scroll={{y:700, x: false}}
                  />
                </div>
            </Fragment>);

  	}

}



export default AntdTable1;
