const TodoService = require('./../service/todo.service');
const TodoRepository = require('./../repositories/todo.repository');

const todoService = new TodoService(new TodoRepository());

function getTodos(req, res){
    const response = todoService.getAllTodos();
    return res.json({
        data : response
    })
}

function createTodo(req, res){
    const todoText = req.body.todoText;
    todoService.create(todoText);
    return res.json({
        data : 'New todo created' 
    })
}

module.exports = {
    getTodos,
    createTodo
}