const {Router} = require("express")
const { checkBlogFeild } = require("../middlewares/blog.middleware")
const { isAuth, loginCheck } = require("../middlewares/auth")
const { blogCreatePage, blogcreate, blogs, blogdelete, blogupadate, blogsearch, singleblog, likeupdate, addcomment, blogPage } = require("../controllers/blog.controller")
const blogRouter = Router()

blogRouter.get("/" , blogPage)
blogRouter.get("/create" ,isAuth ,  blogCreatePage)
blogRouter.post("/create"  , checkBlogFeild ,isAuth, blogcreate)
blogRouter.get("/blogs" , blogs)
blogRouter.delete("/delete/:id" ,isAuth , blogdelete)
blogRouter.patch("/edit/:id" , isAuth , blogupadate)
blogRouter.get("/singleBlog/:id" , singleblog)
blogRouter.patch("/like/:bid",loginCheck, likeupdate)
blogRouter.patch("/comment/:bid" , loginCheck, addcomment)
blogRouter.get("/search" , blogsearch)

module.exports = blogRouter