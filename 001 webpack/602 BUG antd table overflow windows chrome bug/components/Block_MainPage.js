import React, {PureComponent} from 'react';
import TableMinimize from './TableMinimize';
import './Block_MainPage.less';
var columns = [
    {
      "title": "Name",
      "dataIndex": "name",
      "width": 100
    },
    {
      "title": "Age",
      "dataIndex": "age",
      "width": 100
    },
    {
      "title": "Addressssssssssssss",
      "dataIndex": "address",
      "width": 100
    },
    {
      "title": "Tags tags tags tags",
      "dataIndex": "tags",
      "width": 100
    },
    {
      "title": "Action",
      "dataIndex": "action",
      "width": 100
    }
  ];
class Block_MainPage extends PureComponent {

    state={
        data:[],
      };
      componentDidMount() {
        const data = [];
        for (let i = 0; i < 5; i++) {
          data.push({
            key: i,
            name: `Edward King21313 123123dwedwedwd131 123  123233 ${i}`,
            age: i,
            address: `London London London 32131 23131dwdwdwedwedewdw312  13123 213 3 12313, Park Lane no. ${i}`,
            tags: i%2===0?'cool teacher':'loser',
            action: Math.random(),
          });
        }
        this.setState({data:data});
      }
    
      render() {
        return (<div className="Block_MainPage">
           <div style={{height:'75px',outline:'1px solid red'}}></div>
           <div style={{height:'75px'}}><TableMinimize
            tableId={'123'}
            columns={columns}
            data={this.state.data}
            pagDisable
          /></div>

        </div>)
      }

}

export default Block_MainPage;
