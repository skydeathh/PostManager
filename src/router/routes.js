import About from "../pages/About";
import Error from "../pages/Error";
import Post from "../pages/Post";
import Posts from "../pages/Posts";

export const routes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: Post, exact: true},
]