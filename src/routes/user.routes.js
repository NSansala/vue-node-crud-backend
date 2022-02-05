const express = require('express')
const UserController = require('../controllers/user.controller')
const UserRouter = express.Router()

//GET ALL USERS
UserRouter.get('/' , UserController.getAllUsers)

//GET ONE USER
UserRouter.get('/:id' , UserController.getOneUser)

//CREATE USERS
UserRouter.post('/createUser' , UserController.userRegister)

//UPDATE USERS
UserRouter.put('/:id' , UserController.userUpdate)

//DELETE USERS
UserRouter.delete('/:id' , UserController.userDelete)

module.exports = UserRouter