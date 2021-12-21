const todo = require('../models/todo');

async function insertTodo(req, res){
    const { title, description, deadline, isCompleted } = req.body;
    todo.create({
        title, description, deadline, isCompleted
    })
    .then(function(data){
        res.status(200).json({
            success: true, message: 'Data has been created', data
        });
    })
    .catch(function(error){
        res.status(401).json({success: false, message: 'Not created '+error.message});
    });
}

function updateTodoById(req, res){
    // const { id } = req.params;
    const id = req.params.id;
    const { isCompleted } = req.body;
    todo.findByIdAndUpdate(id, {isCompleted: isCompleted})
    .then(function(data){
        res.status(200).json({success: true, message: 'Todo updated successfully', data})
    })
    .catch(function(err){
        res.status(404).json({success: false, message: 'Todo cant update. Try again'});
    })
}

function deleteTodoById(req, res){
    const { id } = req.params;
    todo.findByIdAndDelete(id)
    .then(function(){
        res.status(200).json({success: true, message: 'Todo is deleted successfully'});
    })
    .catch(function(err){
        console.log('Cant delete todo: ', err.message);
        res.status(404).json({success: false, message: 'Cant delete todo. Please check your internet connection and try again.'})
    })
}

function getTodoById(req, res){
    // const { id } = req.params;
    const id = req.params.id;
    todo.findById(id)
    .then(function(data){
        res.status(200).json({
            success: true, data
        })
    })
    .catch(function(error){
        res.status(404).json({
            success: false, error: 'Cant get data: '+ err.message
        })  
    });
}

function getAllTodos(req, res){
    todo.find({})
    .then(function(data){
        res.status(200).json({
            success: true, total: data.length, data
        })
    })
    .catch(function(err){
        res.status(404).json({
            success: false, error: 'Cant get data: '+ err.message
        })
    })
}

module.exports = {
    insertTodo, updateTodoById, deleteTodoById, getTodoById, getAllTodos
}