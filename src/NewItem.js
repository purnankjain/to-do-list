import React, { Component } from 'react';

export default class NewItem extends Component {
  constructor(){
    super()
    this.callFn = this.callFn.bind(this)
    this.newItem = React.createRef();
  }
  callFn(e){
    this.props.addItemCallback(this.newItem.current.value)
    this.newItem.current.value = '';
  }
  render() {
    return (
      <div className="NewItemDiv">
        <input type='text' className='NewItem' id='NewItem' ref={this.newItem} />
        <div className='Add-button' onClick={this.callFn}>
        Add
        </div>
      </div>
    );
  }
}