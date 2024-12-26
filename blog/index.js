const express = require("express")

const userRouter = require("./routes/user.route")
const cookie = require("cookie-parser")
const blogRouter = require("./routes/blog.route")
const connectDb = require("./config/db")



const app = express()
app.set("view engine", "ejs")
app.set("viwes", __dirname + "/views")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookie())
app.get("/", (req, res) => {
    res.send("Welcome to the Blog API");
});
app.use("/user",userRouter)
app.use("/blog" , blogRouter)


app.listen(8090, ()=>{
    connectDb();
    console.log("Server is started on port 8090")
})