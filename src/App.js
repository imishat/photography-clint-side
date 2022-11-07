import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './pages/Home/Home';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }

      ]
    }
  ])
  return (
    <div data-theme="light">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
    
    
  );
}

export default App;
