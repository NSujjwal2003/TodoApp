const express = require('express');

const todoRouter = express.Router();
const { getTodos, createTodo } = require('../../controller/todo.controller');
const { createTodoValidator } = require('../../validators/todo.validator');

todoRouter.get('/', getTodos);

todoRouter.post('/', createTodoValidator, createTodo);



module.exports = todoRouter;

