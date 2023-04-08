import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Meals from './components/Meals/Meals';
import MealDetails from './components/MealDetails/MealDetails';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
         },
         {
            path: '/about',
            element: <div>About page</div>
         },
         {
            path: '/meals',
            element: <Meals></Meals>,
            loader: () => fetch(`https://jsonplaceholder.typicode.com/photos`)
         },
         {
            path: '/meal/:mealId',
            element: <MealDetails></MealDetails>,
            loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/photos/${params.mealId}`)
         },
      ]
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
