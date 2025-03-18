const express = require('express');

const todoRouter = express.Router();
const { getTodos, createTodo } = require('../../controller/todo.controller');

todoRouter.get('/', getTodos);

todoRouter.post('/', createTodo);



module.exports = todoRouter;

