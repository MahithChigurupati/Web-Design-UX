import mongoose from 'mongoose';

//created schema for ToDO list
const Schema = new mongoose.Schema({
    title:
    {
        type:String,
        required:'Title is required.'
    },
    description:
    {
        type:String,
        required:'Description is required.'
    },
    due_Date:
    {
        type:Date
        
    },
    due_Time:
    {
        type:String
        
    },
    createdDate:
    {
        type:Date
        
    },
    lastModifiedDate:
    {
        type:Date
        
    },
    status:
    {
        type: String,
        default: "open"
    }
}, {versionKey: false});


const model = mongoose.model('todo',Schema);

export default model;