import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root.jsx'
import ItemRoot from './routes/item.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Jn1oR3-EGDzi_fBZcrD3dD6WnxvtVFM",
  authDomain: "fir-1-coderreactjs.firebaseapp.com",
  projectId: "fir-1-coderreactjs",
  storageBucket: "fir-1-coderreactjs.appspot.com",
  messagingSenderId: "480534360806",
  appId: "1:480534360806:web:68d6e35eb8f144f8678127",
  measurementId: "G-16NJC2CT3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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

