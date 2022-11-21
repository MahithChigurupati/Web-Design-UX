import React from 'react';
import './ToDo-Item.scss';
import {deleteTodoAction} from '../../Store/Actions/todo'
import {connect} from 'react-redux';
import { setStatus } from '../../Services/todo-service';

//storing state data from the store
const mapStoreToProps = (state) =>({todos: state.todos});

//dispatching the data from action to store
const mapDispatchToProps =(dispatch)=>{
    return{
        delete : todo=>dispatch(deleteTodoAction(todo))
    };
}

//a Todo item component to have the item data
class ToDoItemComponent extends React.Component{
    //A method that gets called when user clicks on 
    clickHandler =()=>{
        const payload = {"status":"close"}
        const index = this.props.value;
        const todo = this.props.todos[index]._id;
        console.log(todo);
        setStatus(payload,todo);
        window.location.reload(false);
   }

    setSelected(){
        const formPage = document.getElementById('main-area');
        formPage.style.display="block";
        const items =document.getElementById('describe');
        const fill=document.getElementById('filler');
        fill.style.display="none";
        items.style.display="block"
        items.innerHTML="";

        const index = this.props.value;
        const todo = this.props.todos[index];
        // const form = document.getElementById('form');
        // const formData = new FormData(form);
        // formData.set('title',this.props.todos[index].title);
        // formData.set('description',this.props.todos[index].description);
        // formData.set('due_date',this.props.todos[index].due_date);
        // formData.set('due_time',this.props.todos[index].due_time);
        // window.location.reload(false);
        //creating elements in the main-area to display the inner content of the selected item 

    //constructing html to displays the title data
    const wrapper = document.createElement('div');
    // wrapper.id=`id-${todo.index}`;
    const title =document.createElement('p');
    const titleBold =document.createElement('strong');
    titleBold.textContent = 'Title:';
    const titleBreak = document.createElement('br');
    title.appendChild(titleBold).appendChild(titleBreak);
    title.append(todo.title);
    wrapper.appendChild(title);
    items.appendChild(wrapper);

    //constructing the html to display the description data
    const desc =document.createElement('p');
    const descBold =document.createElement('strong');
    descBold.textContent = 'Description:';
    const descBreak = document.createElement('br');
    desc.appendChild(descBold).appendChild(descBreak);
    desc.append(todo.description);
    wrapper.appendChild(desc);
    items.appendChild(wrapper);

    //constructing the html to display the due data elements
    const due =document.createElement('p');
    const dueBold =document.createElement('strong');
    dueBold.textContent = 'Due Date:';
    const dueBreak = document.createElement('br');
    due.appendChild(dueBold).appendChild(dueBreak);
    due.append(todo.due_Date);
    wrapper.appendChild(due);
    items.appendChild(wrapper);

    //constructing html to display the due time elemsnts in the main area
    const time =document.createElement('p');
    const timeBold =document.createElement('strong');
    timeBold.textContent = 'Due Time:';
    const timeBreak = document.createElement('br');
    time.appendChild(timeBold).appendChild(timeBreak);
    time.append(todo.due_Time);
    wrapper.appendChild(time);
    items.appendChild(wrapper);

    //constructing html to display the mark as complete button in the main area
    const complete =document.createElement('button');
    complete.id ='complete-btn';
    complete.classList.add('completeBtn');
    complete.onclick ='{this.completed.bind(this)}';
    complete.textContent = 'Mark as Complete';
    wrapper.appendChild(complete);
    items.appendChild(wrapper);

    // const area = document.getElementById('main-area');
    // area.style.display="block";

    const completeBtn = document.getElementById('complete-btn');
    completeBtn.addEventListener('click',this.clickHandler);


    }
    render(){
        return(
            <li onClick={this.setSelected.bind(this)} className="item">
                {this.props.todo}
                {/* <button onClick={this.clickHandler.bind(this)} className="btnDone"></button> */}
            </li>
        )
    }
}

const ToDoItem = connect(mapStoreToProps, mapDispatchToProps)(ToDoItemComponent);

export default ToDoItem;