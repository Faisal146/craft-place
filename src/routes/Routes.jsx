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
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Index></Index>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/all",
        element: <AllItems></AllItems>,
      },
      {
        path: "/all/:filter",
        element: <AllItems></AllItems>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`https://craft-place-server-2.vercel.app/items/${params.id}`),
      },
      {
        path: "/list",
        element: (
          <PrivateRoute>
            <List></List>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) =>
          fetch(`https://craft-place-server-2.vercel.app/items/${params.id}`),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },

      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
