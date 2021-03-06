require('dotenv').config();
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const todoController = require('./controllers/todoController');
const PORT = process.env.PORT || 4000;

server.use(express.json());
server.get('/', function(req, res){
    res.status(200).json({success: true, message: 'WELCOME, this is Isaac todo node API'});
});
server.get('/todos', todoController.getAllTodos);
server.get('/todo/:id', todoController.getTodoById);
server.post('/todo', todoController.insertTodo);
server.put('/todo/:id', todoController.updateTodoById);
server.delete('/todo/:id', todoController.deleteTodoById);

server.listen(PORT, function(){
    console.log('Server has started to run...');
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log('DB is connected');
    })
    .catch(function(error){
        console.log('DB is not connected: ', error.message);
    });
});