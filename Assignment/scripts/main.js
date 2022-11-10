//JS code for functionanlities involved in the main area

const button = document.getElementById('btn');
const adding = document.getElementById('adder');
const form = document.getElementById('form');
//geting the date object to get current date
const date = new Date();
let temp= 5;
const addItem = (event) =>{
//getting the data enetered by the user from the form
    const formData = new FormData(form);
    const formTitle = formData.get('title');
    const formDescription =formData.get('description');
    const formDate =formData.get('due_date');
    const formTime = formData.get('due_time');

    //validations to check if data entered by the user is valid
    const validCheck =()=>{
        if(formDescription===""|| formDate===""|| formTime===""|| formTitle===""){
            alert('Please enter the details');
   
        }else if (new Date(formDate)<date) {//checking if date entered is in future
            alert('Please enter valid date');
        }else{
            return true;
        }
    }

    //creating an object with data entered by user in the form
    const newAdd={
        'title': formTitle,
        'description': formDescription,
        'due_date': formDate,
        'time': formTime,
        'status': 'open',
        'id': temp++
    }
    console.log(temp);
    if(validCheck()){ 
        todoList=todoList.concat(newAdd); //concatenating newly entred data with existing JSON Data
        addList(newAdd);
    }
}

//listened for add item buttion on side button
button.addEventListener('click', addItem);

adding.addEventListener('click',()=>{
    const dane = document.getElementById('filler');
    const den = document.getElementById('describe');
    form.reset();
    den.innerHTML="";
    dane.style.visibility="visible";
});