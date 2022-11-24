import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Service/Service";
import Review from "../../Pages/Review/Review";
import Blogs from "../../Pages/Blogs/Blogs";
import Contact from "../../Pages/Contact/Contact";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/LogIn/Login";
import BlogDetails1 from "../../Pages/Blogs/BlogsDetails/BlogDetails1";
import BlogDetails2 from "../../Pages/Blogs/BlogsDetails/BlogDetails2";
import BlogDetails3 from "../../Pages/Blogs/BlogsDetails/BlogDetails3";
import BlogDetails4 from "../../Pages/Blogs/BlogsDetails/BlogDetails4";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Service></Service>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/my-review',
                element: <Review></Review>
            },
            {
                path: '/contact-us',
                element: <Contact></Contact>
            },
            {
                path: '/log-in',
                element: <Login></Login>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: 'blogs/sql-vs-no-sql-details',
                element: <BlogDetails1></BlogDetails1>
            },
            {
                path: 'blogs/jwt-details',
                element: <BlogDetails2></BlogDetails2>
            },
            {
                path: 'blogs/js-vs-nodeJs-details',
                element: <BlogDetails3></BlogDetails3>
            },
            {
                path: 'blogs/nodejs-multiple-request-details',
                element: <BlogDetails4></BlogDetails4>
            },
            
        ]
        
    }
])

export default router;