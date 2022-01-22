import React from "react";
import { Grid } from "semantic-ui-react";
import ProductList from "../pages/ProductList";

import Navi from "./Navi";
import "./css/dashboard.css";
import NavbarBottom from "./NavbarBottom";

import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/carts/CartDetail";
import Home from "../pages/home/Home";
import ProductAdd from "../pages/ProductAdd";
export default function Dashboard() {
  return (
    <div>
      <Navi />
      <NavbarBottom />
      <Grid stackable>
        <Grid.Row></Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartDetail />} />
              <Route path="/product-add" element={<ProductAdd />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
