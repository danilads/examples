import React,{Fragment} from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import disablePaginationHOC from './disablePaginationHOC';
import virtualizedTableHOC from './virtualizedTableHOC';
const VirtualizedTable = virtualizedTableHOC(disablePaginationHOC(ReactTable));

class Table2virt extends React.PureComponent {

  	render() {
		const data = [];
		for(let i=0;i<2000;i++){
			data.push({
            firstName: 'Linsley',
            lastName: 'Tanner',
			age: i,
            status: 'empty',
            visits: '33'
			})
		}
		
		 
		  return <div style={{width:'500px'}}>
				<VirtualizedTable
                    data={data}
                    columns={[
                        {
                        Header: "First Name",
                        accessor: "firstName"
                        },
                        {
                        Header: "Last Name",
                        accessor: "lastName"
                        },
                        {
                        Header: "Age",
                        accessor: "age"
                        },
                        {
                        Header: "Status",
                        accessor: "status"
                        },
                        {
                        Header: "Visits",
                        accessor: "visits"
                        }
                    ]}
                    
                    style={{ height: "400px" }}
                    />
		  </div>

  	}

}



export default Table2virt;
