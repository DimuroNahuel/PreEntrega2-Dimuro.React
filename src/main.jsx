import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root.jsx'
import ItemRoot from './routes/item.jsx';
import { CustomProvider } from './context/index.jsx';
import Cart from './routes/cart.jsx'
import ErrorPage from "./routes/error-page";

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'

import { initializeApp } from "firebase/app";
import Layout from './componentes/Layout/index.jsx';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

initializeApp(firebaseConfig);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children:[
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
    element: <Cart/>,
  }],
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
)

