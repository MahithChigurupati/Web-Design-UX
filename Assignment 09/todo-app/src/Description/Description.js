import React from 'react';
import './Description.scss';
import {addTodoAction} from '../Store/Actions/todo'
import {connect} from 'react-redux';
import { postTodos } from '../Services/todo-service';


//state containing store data
const mapStoreToProps = (state) =>({todos: state.todos});


//function to make dispatch call to the store
const mapDispatchToProps =(dispatch)=>{
    return{
        add : todo=>dispatch(addTodoAction(todo))
    };
}

//designing the Description component to display the centre pane of the Page
class DescriptionComponent extends React.Component{
    //method to get the user entered data and form a  JSON Object to make a call to respective API Method
    setPost(){
        const form = document.getElementById('form');
        const formData = new FormData(form);
        const formTitle = formData.get('title');
        const formDescription =formData.get('description');
        const formDate =formData.get('due_date');
        const formTime = formData.get('due_time');

        const newAdd={
                "title": formTitle,
                "description": formDescription,
                "due_Date": formDate,
                "due_Time": formTime
        }
        postTodos(newAdd);
        window.location.reload(false);
        // this.props.add(newAdd);
        const formPage = document.getElementById('main-area')
        formPage.style.display="none";
    }

    //A method that renders REACT Component
    render(){
        return(
            <div id="main-area" className="main-area">
            <div id="describe" className="describe">
                            </div>

            <div id="filler" class="filler">
                <form id="form">
                        <div>
                            <label htmlFor="title">Title</label>
                            <input type="text" name ="title" id="title" placeholder="Title your TO-DO"></input>
                        </div>

                        <div>
                            <label htmlFor="description">Description</label>
                            <textarea rows="5" cols="30" name ="description" id="description" placeholder="Describe your TO-DO"></textarea>
                        </div>
                        <div>
                            <label htmlFor="due_date">Due Date</label>
                            <input type="date" name ="due_date" id="due_date"></input>
                        </div>
                        <div>
                            <label htmlFor="due_time">Due Time</label>
                            <input type="time" name ="due_time" id="due_time"></input>
                        </div>
                        <input onClick={this.setPost.bind(this)} className="btn" id="btn" type="button" value="Add"></input>
                    
                </form>
            </div>
        </div> )
    }
}

//initializing connect to transfer data b/w store and component
const Description = connect(mapStoreToProps, mapDispatchToProps)(DescriptionComponent);

export default Description;