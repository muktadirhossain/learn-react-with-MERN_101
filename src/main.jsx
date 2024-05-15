import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ErrorPage from './pages/error-page.jsx';
import CountryPage from './pages/CountryPage.jsx';
import { allCountryLoader, countryLoader } from './lib/fetchData.js';
import RootLayout from './layout/RootLayout.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,

    children: [

      {
        path: "/",
        element: <Home />,
        loader: allCountryLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country/:countryCca3Code",
        element: <CountryPage />,
        loader: countryLoader,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
