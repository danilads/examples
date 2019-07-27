import React,{Fragment} from 'react';
import {Row, Col, Table, Divider, Tag} from 'antd';

import './AntdTable.less';
//README
//AntdTable1scrollAndPaginataion (Скрол и Пагинация)

//Cкрол
//scroll={{y:700, x: true}}
//x - всегда по умолчанию true (иначе будет баг с кривыми колнками)
//y - высота таблицы

//Пагинация
//используем стандартную для всего сайта
//pagination={{ pageSize: 10 , size:'small', showQuickJumper:true, position: 'top'}}
// pageSize - сколько позиций на странице
// position - где будет пагинация (top, bottom);
//если нужно убрать пагинация (но если таблица очень большая - будут лаги)
//pagination={false} //для маленьких таблиц




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
    state={
      columns : [
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
      ]
    };
  	render() {
      const columns = [...this.state.columns];
      columns.push({}); //заглушка при использовнии fixedd

      return (<Fragment>
                <h2>Скрол и Пагинация</h2>
                <div style={{ width: '400px'}}>
                  <Table
                    className={'TableDefault'}
                    bordered={ true }
                    columns={columns}
                    dataSource={data}
                    scroll={{y:700, x: true}}
                    pagination={{ pageSize: 10 , size:'small', showQuickJumper:true, position: 'bottom'}} //объект пагинации
                    // pagination={false} //для маленьких таблиц
                    rowSelection={{}}
                    />
                  </div>
              </Fragment>);

      }

}



export default AntdTable1scrollAndPaginataion;
