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
  
//babel transp

toggleElem = function toggleElem(isOpened) {
  var prevIsOpened = _this.state.isOpened,
      _this$props = _this.props,
      cbOpen = _this$props.cbOpen,
      cbClose = _this$props.cbClose;
  if (!isBoolean(isOpened)) isOpened = !prevIsOpened;

  _this.setState({isOpened: isOpened});

  var cb = isOpened ? cbOpen : cbClose;
  cb && cb();
};



openCloseFunc = function openCloseFunc(e) {
    if (e === true) {
      _this.setState({isOpened: _this.state.e});
      _this.props.cbOpen && _this.props.cbOpen();
    }
    else if (e === false) {
        _this.setState({isOpened: _this.state.e});
        _this.props.cbClose && _this.props.cbClose();
    }
    else {
          _this.setState({isOpened: !_this.state.isOpened});
          if (_this.state.isOpened) {
              _this.props.cbClose && _this.props.cbClose();
          }
          else {
            _this.props.cbOpen && _this.props.cbOpen();
          }
        }
  };