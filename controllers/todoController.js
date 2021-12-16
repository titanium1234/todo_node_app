const todo = require('../models/todo');

function insertTodo(req, res){
    todo.create(req.body)
    .then(function(){
        res.status(200).json('Data has been created');
    })
    .catch(function(error){
        res.status(401).json('Not created '+error.message);
    });
}

function updateTodoById(req, res){

}

function deleteTodoById(req, res){

}

function getTodoById(req, res){

}

function getAllTodos(req, res){
    
}

module.exports = {
    insertTodo, updateTodoById, deleteTodoById, getTodoById, getAllTodos
}