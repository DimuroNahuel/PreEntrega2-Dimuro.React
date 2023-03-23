import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root.jsx'
import ItemRoot from './routes/item.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "category/:id",
    element: <Root />,
  },
  {
    path: "/item/:id",
    element: <ItemRoot /> ,
  },
  {
    path: "/cart",
    element: <div>Hello world!</div>,
  },
  {
    path: "/checkout",
    element: <div>Hello world!</div>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
