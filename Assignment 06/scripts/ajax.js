// Executes on page load to populate JSON Data to UI
/*---------------------------------------------------*/

const list = document.getElementById('left-list'); //for pending items with status open

const rightList= document.getElementById('right-list'); //for completed items with status closed

let todoList;

const load =(event) =>{
    
    const target = event.target;
    //only on succesfull page load
    if(target.status === 200){
        const responseText =target.responseText;
         todoList =JSON.parse(responseText); // parsing the JSON structure to an Object
        todoList.forEach(todo => addList(todo));     
    }
    
}

//calling addList function by passing the parsed JSON structure to construct HTML elements
const addList =(todo) =>{

    const filler = document.getElementById('filler');
    filler.style.visibility="hidden";
   
    if(todo.status ==="open"){
        //creating new DOM to add it in left side of the page for pending items with status open
        const item = document.createElement('li');
        item.classList.add('item');
        item.id = `id-${todo.id}`;
        item.textContent = todo.title;

        //creating and apending the button to represent the completion status
        const btnDone = document.createElement('button');
        btnDone.classList.add('btn-submit');
        btnDone.id ='btn-Done';
        btnDone.innerHTML = "<i class='fas fa-check'></i>";
        //event listener to listen for click event on completion status checkbox
        btnDone.addEventListener("click", () => {
        item.classList.toggle("checked");
        btnDone.classList.toggle("btnDone");

            //the below code will be used for hiding complted items once box is checked and same checked item will be made visible on the right side of the page
            const demo=item;
            item.style.visibility="hidden";
            demo.style.visibility="visible";
            rightList.appendChild(demo);

        });

    list.appendChild(item).appendChild(btnDone);

    }else{
        //adding completed items with status as closed in JSON doc to be displayed on right side of the page
        const item = document.createElement('li');
        item.classList.add('item','checked');
        item.id = `id-${todo.id}`;
        item.textContent = todo.title;

        // appending button with coplor green to represent completeness for right side items
        const btnDone = document.createElement('button');
        btnDone.classList.add('btn-submit', 'btnDone');
        btnDone.id ='btn-Done';
        btnDone.innerHTML = "<i class='fas fa-check'></i>";
        rightList.appendChild(item).appendChild(btnDone);
    }

}

//Creating a HTTP Request to JSON File
const xhr =new XMLHttpRequest();
xhr.open('GET', 'data/todo.json');
xhr.addEventListener('load',load); //adding a event listener for page load event

xhr.send();