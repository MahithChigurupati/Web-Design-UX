import React from 'react';
import './ToDo.scss';
import ToDoItem from './ToDo-Item/ToDo-Item';
import {connect} from 'react-redux';
import { addTodoAction } from '../Store/Actions/todo';
import { getTodos } from '../Services/todo-service';

//storing state data from the store
const mapStoreToProps = (state) =>({todos: state.todos});

//dispatching the data from action to store
const mapDispatchToProps =(dispatch) =>{
    return {
        addOne : todos =>dispatch(addTodoAction(todos))
    }
}

//a Todo item component to have the item data
class ToDoComponent extends React.Component{

    showMid(){
        const formPage = document.getElementById('main-area')
        const fill = document.getElementById('filler');
        const items =document.getElementById('describe');
        items.style.display = "none";
        formPage.style.display="block";
        fill.style.display = "block";
    }

    componentDidMount(){
        getTodos().then((response) => response.json())
        .then((data) => data.map(el =>this.props.addOne(el)))
    }
// renders the react UI
    render(){
        const todos =this.props.todos;
        const items = todos.map((item,index)=> 
        {if(item.status!=="close"){
        return <ToDoItem
            key ={index}
            todo={item.title}
            value={index} 
            selectedHandler={this.props.selectedHandler}>

        </ToDoItem>}})
        return(
            <div className="sidebar">
            <h3 className="side-heading">TO-DO ITEMS</h3>
            <button onClick = {this.showMid.bind(this)}id="adder" className="add-item">Add Item</button>
            <ul id="left-list">
                {items}
            </ul>
            </div>
        )
    }
}

const Todos = connect(mapStoreToProps,mapDispatchToProps)(ToDoComponent);

export default Todos;