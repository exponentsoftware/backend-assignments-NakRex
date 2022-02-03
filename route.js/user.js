const express = require('express');
let userRouter = express.Router();
let controller = require('../controller/user')
userRouter.post('/register', controller.signup);
userRouter.post('/userlogin', controller.login)
userRouter.post('/create', controller.createTodo)
userRouter.delete('/delete', controller.deleteTodo)
userRouter.patch('/done', controller.done)