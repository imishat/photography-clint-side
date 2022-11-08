import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './pages/Home/Home';
import Error from './pages/ErrorPages/Error';
import Login from './pages/FromPages/Loginpage/Login';
import Sing from './pages/FromPages/SingPage/Sing';
import Services from './pages/Services/Services';
import Catagory from './pages/Catagory/Catagory';
import CreateService from './pages/CreateService/CreateService';
import Blogs from './pages/Blogs/Blogs';
import { ToastContainer } from 'react-toastify';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:"/singup",
          element:<Sing></Sing>
        },
        {
          path:'/services',
          loader:()=>fetch('http://localhost:5000/services'),
          element:<Services></Services>


        },
        {
          path:'/catagory/:id',
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
          element:<Catagory></Catagory>
        },
        {
          path:'/create',
          element:<CreateService></CreateService>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        }

      ]
    }
  ])
  return (
    <div data-theme="light">
      <RouterProvider router={router}>

      </RouterProvider>
      <ToastContainer />
    </div>
    
    
  );
}

export default App;
