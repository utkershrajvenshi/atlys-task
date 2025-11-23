import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './index.css'
import App from './App.jsx'
import LoginPage from './LoginPage.jsx'
import SignUpPage from './SignUpPage.jsx'
import AuthContextProvider from './context/AuthContextProvider';

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/signup",
    Component: SignUpPage,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>,
)
