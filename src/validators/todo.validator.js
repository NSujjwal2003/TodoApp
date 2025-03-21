function createTodoValidator(req, res, next) {
    if(!req.body.todoText){
        return res.json({message : 'todoText is required'})
    }

    next();
}


module.exports = {
    createTodoValidator
}