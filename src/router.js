// src/router.js
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import AddMed from "./components/AddMed";
import MedicineList from "./components/AddedList";
import Login from "./components/auth/Login";
import Signup from "./components/auth/register";
import Logout from "./components/auth/logout";
import PrivateRoute from "./components/PrivateRoute"; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'home',
    element: <PrivateRoute element={Home} /> 
  },
  {
    path: 'about',
    element: <PrivateRoute element={About} /> 
  },
  {
    path: 'add',
    element: <PrivateRoute element={AddMed} /> 
  },
  {
    path: 'list',
    element: <PrivateRoute element={MedicineList} /> 
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'signup',
    element: <Signup />
  },
  {
    path: 'logout',
    element: <Logout />
  }
]);

export default router;
