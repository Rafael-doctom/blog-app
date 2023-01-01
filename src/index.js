import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Home } from "./routes/Home";
import { Post } from "./routes/Post";

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },

      {
        path: "/post",
        element: <Post/>,
      }
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);