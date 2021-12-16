const express = require('express');
const mongoose = require('mongoose');
const todoController = require('./controllers/todoController');
const server = express();
const mongo_db_url = 'mongodb+srv://isaac_ghanatechlab:isaacghanatechlab@cluster0.jdlkg.mongodb.net/todos_db?retryWrites=true&w=majority';

server.use(express.json());

server.listen(4000, function(){
    console.log('Server has started to run in express');
    mongoose.connect(mongo_db_url)
    .then(function(){
        console.log('DB is connected');
        server.get('/todos', todoController.getAllTodos);
        server.post('/todo', todoController.insertTodo);
        server.put('/todo', todoController.updateTodoById);
        server.delete('/todo', todoController.deleteTodoById);
    })
    .catch(function(error){
        console.log('DB is not connected: ', error.message);
    });
});