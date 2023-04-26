const express=require("express");
const Router=express.Router();
const controller=require("./controller");
const { verfyToken } = require('./jwt')
 
// 1. first routes for Create User.
Router.post('/user_path',controller.user_data);

// 2. second router for List User Api
Router.get('/All_user_list',controller.user_list);

// 3. third router for Login Api with JWT
Router.post('/LoginUser',controller.Login_user);

// 4.fourth router for Get Profile detail by Login Token...
Router.post('/UserDetail',verfyToken,controller.UserDetail);      //  all routers is proper working.....

module.exports = Router