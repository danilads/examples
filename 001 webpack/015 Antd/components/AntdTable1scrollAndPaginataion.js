import React,{Fragment} from 'react';
import {Row, Col, Table, Divider, Tag} from 'antd';

import './AntdTable1scrollAndPaginataion.less';
//README 
//общая длинна  (scroll={{x: 500}})
//должна быть равна, либо больше суммы (columns width: 100)

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 100,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    width: 100,
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
    width: 100,
    render: (text, record) => (
      <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  }
];


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


class AntdTable1scrollAndPaginataion extends React.PureComponent {

  	render() {
		return (<Fragment>
              <h2>Скрол</h2>
              <div style={{ width: '400px'}}>
                <Table
                  className={'TableDefault'}
                  bordered={ true }
                  columns={columns}
                  dataSource={data}
                  pagination={{ pageSize: 50, defaultCurrent:2 }} //на сколько разбивать
                  scroll={{y:700, x: 1}}
                  rowSelection={{}}
                  />
                </div>
            </Fragment>);

  	}

}



export default AntdTable1scrollAndPaginataion;
