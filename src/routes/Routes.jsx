import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Index from "../pages/home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AddItem from "../pages/items/AddItem";
import AllItems from "../pages/items/AllItems";
import Details from "../pages/items/Details";
import List from "../pages/List/List";
import UpdateItem from "../pages/list/Update";
import UpdateProfile from "../Auth/Update";
import Profile from "../Auth/Profile";
import About from "../pages/about/About";
 const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children : [
            {
               path: '/',
               element: <Index></Index>
            },
            {
               path: '/login',
               element: <Login></Login>
            },
            {
               path: '/register',
               element: <Register></Register>
            },
            {
               path: '/add',
               element: <AddItem></AddItem>
            },
            {
               path: '/all',
               element: <AllItems></AllItems>
            },
            {
               path: '/details/:id',
               element: <Details></Details>,
               loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`)
            },
            {
               path: '/list',
               element: <List></List>
            },
            {
               path: '/update/:id',
               element: <UpdateItem></UpdateItem>,
               loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`)
            },
            {
               path: '/update-profile',
               element: <UpdateProfile></UpdateProfile>
            },
            {
               path: '/profile',
               element: <Profile></Profile>
            },
    
            {
               path: '/about',
               element: <About></About>
            },
          
    ]
    }

]);

export default router;