// import { useState } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
// import { CatalogItem } from "./pages/CatalogItem/CatalogItem";
import { StaticPage } from "./pages/StaticPage/StaticPage";
// import { Cart } from "./pages/Cart/Cart";

import { Layout } from "./components/Layout/Layout";

import { About } from "./data/about";
import { Contacts } from "./data/contacts";
import { NotFound } from "./data/notfound";


import './App.css';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        {/* <Route path="/catalog/:id" element={<CatalogItem />} /> */}
        <Route path="/about" element={<StaticPage header="О магазине"><About /></StaticPage>} />        
        <Route path="/contacts" element={<StaticPage header="Контакты"><Contacts /></StaticPage>} />        
        <Route path="*" element={<StaticPage header="Страница не найдена"><NotFound /></StaticPage>} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Route>
    )
  );

  return (    
    <RouterProvider router={routes} />
  )
}

export default App;
