import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root.jsx'
import ItemRoot from './routes/item.jsx';
import { CustomProvider } from './context/index.jsx';

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'

import { initializeApp } from "firebase/app";
import Layout from './componentes/Layout/index.jsx';

const firebaseConfig = {
  apiKey: "AIzaSyA5Jn1oR3-EGDzi_fBZcrD3dD6WnxvtVFM",
  authDomain: "fir-1-coderreactjs.firebaseapp.com",
  projectId: "fir-1-coderreactjs",
  storageBucket: "fir-1-coderreactjs.appspot.com",
  messagingSenderId: "480534360806",
  appId: "1:480534360806:web:68d6e35eb8f144f8678127",
  measurementId: "G-16NJC2CT3K"
};

initializeApp(firebaseConfig);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
    element: <div>Hello world!</div>,
  },
  {
    path: "/checkout",
    element: <div>Hello world!</div>,
  }
  ],
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
)

