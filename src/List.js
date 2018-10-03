import React from 'react';
import ListItem from  './ListItem'

let List = (props) => props.items.map((item, index) => {return <ListItem key={index} name={item.name} completed={item.completed} completeItemCallback={props.completeItemCallback} deleteItemCallback={props.deleteItemCallback}/>});

export default List;