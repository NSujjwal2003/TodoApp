const express = require('express');
const homeController = require('./../../controller/home.controller');
const todoRouter = require('./todo.routes');
const router = express.Router();

router.use('/todos', todoRouter);
router.get('/ping', homeController);

module.exports = router;