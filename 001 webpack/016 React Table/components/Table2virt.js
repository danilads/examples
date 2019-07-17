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
                    className={'ReactTable'}
                    data={data}
                    columns={[
                        {
                            Header: "First Name",
                            accessor: "firstName",
                            width: 150,
                        },
                        {
                            Header: "Last Name",
                            accessor: "lastName",
                            width: 150,
                        },
                        {
                            Header: "Age",
                            accessor: "age",
                            width: 150,
                        },
                        {
                            Header: "Status",
                            accessor: "status",
                            width: 150,
                        },
                        {
                            Header: "Visits",
                            accessor: "visits",
                            width: 150,
                        }
                    ]}
                    
                    style={{ height: "400px" }}
                    />
		  </div>

  	}

}



export default Table2virt;
