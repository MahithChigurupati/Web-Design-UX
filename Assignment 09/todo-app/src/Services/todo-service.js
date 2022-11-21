//Service call methods - hitting the End point URL of MongiDB - http://localhost:5001/todos

//GET method API call
export const getTodos = () =>{
     return fetch('http://localhost:5001/todos',{method: "GET"})   
}


//POST Methos API Call
export const postTodos =async(payload)=>{
    console.log(payload);
    fetch('http://localhost:5001/todos', 
    {method: "POST", 
    body: JSON.stringify(payload),
    headers: {"Content-type": "application/json"}
    }
)}

//PATCH Method API Call
export const setStatus =async(payload,id)=>{
    let URL ='http://localhost:5001/todos/'+id;
    fetch(URL, 
    {method: "PATCH",
    body: JSON.stringify(payload),
    headers: {"Content-type": "application/json"}
    })
}