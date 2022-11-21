import React from 'react';
import './Right-Bar.scss';
import ToDoItem from '../ToDo/ToDo-Item/ToDo-Item';
import {connect} from 'react-redux';
import { addTodoAction } from '../Store/Actions/todo';


//getting state data in the store
const mapStoreToProps = (state) =>({todos: state.todos});


//creating method to make a displatch call to store
const mapDispatchToProps =(dispatch) =>{
    return {
        addOne : todos =>dispatch(addTodoAction(todos))
    }
}

//class component to display the right most react component
class RightBarComponent extends React.Component{
    
    render(){
        //forming the elements that contain close status items data, getting data from store
        const todos =this.props.todos;
        const items = todos.map((item,index) => 
        {if(item.status==="close"){
            return <ToDoItem 
            key ={index}
            todo={item.title} 
            value={index} 
            selectedHandler={this.props.selectedHandler}>
        </ToDoItem>}})
        //data that in present inside the list elements
        return(
            <div className="right-bar">
            <h3 className="right-heading">COMPLETED ITEMS</h3>
            <ul id="right-list">
                {items}
            </ul>
            </div>
        )
    }
}

const RightBar = connect(mapStoreToProps,mapDispatchToProps)(RightBarComponent);


export default RightBar;