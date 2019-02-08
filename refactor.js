toggleElem = isOpened => {
    const {state: {isOpened: prevIsOpened}, props: {cbOpen, cbClose}} = this;
  
    if (!isBoolean(isOpened))
      isOpened = !prevIsOpened;
  
  
    this.setState({
      isOpened
    });
  
    const cb = isOpened ? cbOpen : cbClose;
  
    cb && cb();
}


  openCloseFunc=(e)=>{
    //if send atr
    //open
    if(e===true){
        this.setState({isOpened:this.state.e});
        this.props.cbOpen && this.props.cbOpen();
    }
    //close
    else if(e===false){
        this.setState({isOpened:this.state.e});
        this.props.cbClose && this.props.cbClose();
    }
    //toggle
    else{
        this.setState({isOpened:!this.state.isOpened});
        if(this.state.isOpened){
            this.props.cbClose && this.props.cbClose();
        }
        else{
            this.props.cbOpen && this.props.cbOpen();
        }
    }
};
  