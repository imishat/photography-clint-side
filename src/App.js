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
import 'react-toastify/dist/ReactToastify.css';
import PrivetRouts from './pages/Routs/PrivetRouts';
import OwnReview from './pages/OwnReview/OwnReview';
import Reviews from './pages/RewiewPages/Reviews';

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
          loader:()=>fetch('https://pothoserver.vercel.app/services'),
          element:<Services></Services>


        },
        {
          path:'/catagory/:id',
          loader:({params})=>fetch(`https://pothoserver.vercel.app/services/${params.id}`),
          element:<PrivetRouts><Catagory></Catagory></PrivetRouts>
        },
        {
          path:'/create',
          element:<PrivetRouts><CreateService></CreateService></PrivetRouts>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'/review',
          element:<OwnReview></OwnReview>
        },
        {
          path:'/re',
          element:<PrivetRouts><Reviews></Reviews></PrivetRouts>
        }

      ]
    }
  ])
  return (
    <div data-theme="light" className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
      <ToastContainer />
    </div>
    
    
  );
}

export default App;
