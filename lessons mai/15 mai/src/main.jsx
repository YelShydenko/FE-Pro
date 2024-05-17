import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './pages/About/About.jsx';
import Shop from './pages/Shop/Shop.jsx';
import Contacts from './pages/Contacts/Contacts.jsx';
import Category from './pages/Shop/Category/Category.jsx';
import FAQ from './pages/FAQ/FAQ.jsx';
import CategoryPage from './pages/CategoryPage/CategoryPage.jsx';
import CategorySlugPage from './pages/CategoryPage/CategorySlugPage.jsx';
import CategorySlugPageItem from './pages/CategoryPage/CategorySlugPageItem.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/shop',
    element: <Shop/>,
  },
  {
    path: '/shop/:pageId',
    element: <Category/>
  },
  {
    path: '/contacts',
    element: <Contacts/>,
  },
  {
    path: '/faq',
    element: <FAQ/>,
  },
  {
    path: '/categories',
    element: <CategoryPage/>
  },
  {
    path: '/categories/:categoriesId',
    element: <CategorySlugPage/>
  },
  {
    path: '/categories/:categoriesId/:itemId',
    element: <CategorySlugPageItem/>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
