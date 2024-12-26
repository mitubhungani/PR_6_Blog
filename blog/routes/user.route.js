const {Router} = require("express")
const { signupPage, usercreate, login, loginPage } = require("../controllers/user.controller")
const { checkUserFeild } = require("../middlewares/user.middlewares")
const userRouter = Router()


userRouter.get("/signup" , signupPage)
userRouter.post("/signup", checkUserFeild ,usercreate)
userRouter.get("/login" , loginPage)
userRouter.post("/login" , login)

module.exports = userRouter