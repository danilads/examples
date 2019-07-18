import React,{Fragment} from 'react';
import { Grid } from 'react-virtualized';

class VGrid extends React.PureComponent {
	state={
		list:[[]]
	};
	componentDidMount(){
		let list=[];
		for(let i=0;200>i;i++){
            list.push([i,
                <div>David</div>,
                "John",Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()]);
		}
		this.setState({list:list});
	}


	cellRenderer =({ columnIndex, key, rowIndex, style })=>{
        //колонка (начиная с 0)
        let getColNumb = key.slice(key.indexOf('-')+1);
        //попробуем sticky

        let styles = style;
        styles.overflow = 'hidden';
        styles.padding = '5px';
        styles.textOverflow = 'ellipsis';
        if(getColNumb==='0'){
            styles.color = 'red';
            styles.border = '1px solid gray';
        }
        return (
            <div
              key={key}
              style={styles}
            >
              {this.state.list[rowIndex][columnIndex]}
            </div>
          ) 
	} 
	  
  	render() {

		  return <div>
				
				<Grid
                    cellRenderer={this.cellRenderer}
                    columnCount={this.state.list[0].length}
                    columnWidth={150}
                    height={300}
                    rowCount={this.state.list.length}
                    rowHeight={30}
                    width={300}
                />
		  </div>

  	}

}



export default VGrid;
