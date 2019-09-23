import React,{Fragment} from 'react';
import {Row, Col, Table, Divider, Tag} from 'antd';

import './AntdTable.less';
//README






class AntdTable13empty extends React.PureComponent {
    state={
      data: [],
      pagination: {},
      loading: false,

      columns : [
        {
          title: 'Name',
          dataIndex: 'name.first',
          key: 'name',
          width: 100,
        },
        {
          title: 'Surname',
          dataIndex: 'name.last',
          key: 'last',
          width: 100,
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
          width: 100,
        },
        {
          title: 'Cell',
          dataIndex: 'cell',
          key: 'cell',
          width: 100,
          render: cell => <a href="javascript:;">{cell}</a>,
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          width: 100,
        },
        {
          title: 'Login',
          dataIndex: 'login.username',
          key: 'login',
          width: 100,
        },
        {
          title: 'Password',
          dataIndex: 'login.password',
          key: 'password',
          width: 100,
        },
        
  
      ]
    };

    container=React.createRef();
    componentDidMount(){
      //чтобы в рендере был реф
      this.setState({fixRefCOntainer:true});
    }

  	render() {
      const columns = [...this.state.columns];
      columns.push({}); //заглушка при использовнии fixed
      
      //добавляем уникальный id
      const data = this.state.data.map((obj, index) => {
        return {...obj,key:index};
      });

      //если приходит пустая data (был баг - небыло горизонтального скрола)
      //вставляем кастомную заглушку
      if(data.length===0){
        
        let bodyElem = this.container.current && this.container.current.getElementsByClassName('ant-table-tbody')[0];
        console.log('--case 1',this.container.current);
        console.log('--case 1',bodyElem);
        if(bodyElem && bodyElem.offsetWidth){
          console.log('--case 1')
          bodyElem.innerHTML = '<div class="emptyDivForAntdNoData"><br/></div>'
        }
      }
      else{
        let bodyElem = this.container.current && this.container.current.getElementsByClassName('emptyDivForAntdNoData')[0];
        if(bodyElem && bodyElem.offsetWidth){
          bodyElem.remove();
        }
      }
      

      return (<Fragment>
                <h2>Если пустая таблица - баг с скролом(нужно в стилях убрать placeholder)</h2>
                <div style={{ width: '600px'}} ref={this.container}>
                  <Table
                    className={'TableDefault'}
                    bordered={ true }
                    columns={columns}
                    dataSource={data}
                    scroll={{y:700, x: true}}
                    pagination={{ pageSize: 10 , size:'small', showQuickJumper:true, position: 'bottom'}} //объект пагинации
                    // pagination={false} //для маленьких таблиц
                    rowSelection={{}}
                    loading={this.state.loading}

                    />
                  </div>
              </Fragment>);

      }

}



export default AntdTable13empty;
