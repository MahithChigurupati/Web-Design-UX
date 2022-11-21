import { request, response } from 'express';
import req from 'express/lib/request.js';
import * as todosService from './../services/todos-service.js';


//method to set error respose code
const setErrorResponse = (error, response) => {
    response.status(500);
    response.json(error);
}
//function to set success response code
const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

//post method will be executed o post API call
export const post = async (request, response) => {
    try{
        const payload = request.body;
        payload.createdDate = Date.now()
        const todo = await todosService.save(payload);
        setSuccessResponse(todo,response);
    }
    catch (error){
        setErrorResponse(error, response);
    }
}

export const index = async (request, response) => {
    try{
        const id = request.query.id;
        const title = request.query.title;
        const query = {};
        if(id){
            query.id = id;
        }
        if(title)
        {
            query.title = title;
        }
        const todos = await todosService.search(query);
        setSuccessResponse(todos, response);
    }
    catch (error)
    {
        setErrorResponse(error, response);
    }
}


//get method will be executed on GET API call
export const get = async (request, response) => {
    try{
        const id = request.params.id;
        const todo = await todosService.get(id);
        setSuccessResponse(todo, response);
    }catch (error)
    {
        setErrorResponse(error,response);
    }
}


//update method will be called on PATCH API call
export const update = async (request, response) => {
    try{
        const id = request.params.id;
        const updated={...request.body};
        updated.lastModifieddate = Date.now()
        const todo = await todosService.update(updated,id);
        setSuccessResponse(todo, response);

    }catch (error)
    {
        setErrorResponse(error,response);
    }
    
}


//remove method will b ecalled on DELETE API call
export const remove = async (request, response) => {
    try{
        const id = request.params.id;
        const todo = await todosService.remove(id);
        setSuccessResponse({message: `Successfully Removed`}, response);
    }catch (error)
    {
        setErrorResponse(error, response);
    }
    
}