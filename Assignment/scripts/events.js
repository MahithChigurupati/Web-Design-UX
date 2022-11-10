const items =document.getElementById('describe');

const listener =(event) =>{
    //listener to check for the match from json and fetch details like description 
    items.innerHTML="";
    todoList.forEach(todo => {
        if(`id-${todo.id}` === event.target.id){
            addData(todo);
        }
    })
}

const addData = (todo) =>{

    //creating elements in the main-area to display the inner content of the selected item 
    const fill=document.getElementById('filler');
    fill.style.visibility="hidden";
    items.innerHTML="";

    //constructing html to displays the title data
    const wrapper = document.createElement('div');
    wrapper.id=`id-${todo.id}`;
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
    due.append(todo.due_date);
    wrapper.appendChild(due);
    items.appendChild(wrapper);

    //constructing html to display the due time elemsnts in the main area
    const time =document.createElement('p');
    const timeBold =document.createElement('strong');
    timeBold.textContent = 'Due Time:';
    const timeBreak = document.createElement('br');
    time.appendChild(timeBold).appendChild(timeBreak);
    time.append(todo.time);
    wrapper.appendChild(time);
    items.appendChild(wrapper);

    //constructing html to display the mark as complete button in the main area
    const complete =document.createElement('button');
    complete.id ='complete-btn';
    complete.classList.add('completeBtn');
    complete.textContent = 'Mark as Complete';
    wrapper.appendChild(complete);
    items.appendChild(wrapper);

    const completeBtn = document.getElementById('complete-btn');

    const completed =(event)=>{
        const newItem = document.createElement('li');
        const selectedNode=event.target.parentNode;
        
        const getSelectedId=document.getElementById(selectedNode.id);
        
        newItem.classList.add('item');
        newItem.innerHTML= getSelectedId.innerHTML;
        newItem.lastChild.classList.add('btnDone')
    
        rightList.appendChild(newItem);
        getSelectedId.remove();

        const descriptionArea = document.getElementById('describe');
        descriptionArea.innerHTML="";
             
    }
  //event listener when we click on the mark as complete button 
    completeBtn.addEventListener('click', completed);
}

//event listener when we click over the items on the left side to display the description
list.addEventListener('click',listener);