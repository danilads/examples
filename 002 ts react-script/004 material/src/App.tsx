import React from 'react';
import {Button, makeStyles, withStyles} from '@material-ui/core';
import './App.css';

interface AppProps {
  classes?: any,
}

// const styles = makeStyles(()=>({
//   wrapper:{
//     border:'1px solid red'
//   }
// }));

// const App: React.FC<AppProps> = props => {
//   const classes = styles();
//   return (
//     <div className={classes.wrapper}>
//       <Button variant={"outlined"}>btn</Button>
//     </div>
//   )
// }

const styles = withStyles(()=>({
  wrapper:{
    border:'1px solid red'
  }
}));

class App extends React.Component<AppProps> {
  
  run=()=>{
    console.log('hello');
  }
  render(){
    console.log('render')
    return(
        <div className={this.props.classes.wrapper} onClick={this.run}>
          <Button>btn</Button>
        </div>
        )
    }
}

export default styles(App);
