import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor(){
    super()
    this.completeItem = this.completeItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  completeItem(e){
    this.props.completeItemCallback(this.props.name);
  }
  deleteItem(e){
    this.props.deleteItemCallback(this.props.name);
  }
  render() {
    var styleClass = this.props.completed ? 'completed' : ''
    var completeButton = !this.props.completed ? <div className='doneBtn' onClick={this.completeItem}>&#10004;</div> : ''
    var deleteButton = <div className='dltBtn' onClick={this.deleteItem}>X</div>
    return (
      <div className="ListItem" >
        <span className={styleClass}>{this.props.name}</span>
        {completeButton}
        {deleteButton}
      </div>
    );
  }
}

