import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Label } from "semantic-ui-react";
import { useSelector } from "react-redux";

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Dropdown
      pointing="top right"
      item
      icon="shopping cart"
      button
      className="icon"
    >
      <Dropdown.Menu>
        {cartItems.map((cart) => (
          <Dropdown.Item key={cart.product.productId}>
            {cart.product.productName}
            <Label>{cart.quantity}</Label>
          </Dropdown.Item>
        ))}
        {cartItems.lenght === 0 ? (
          <Dropdown.Item disabled>Sepet Boş</Dropdown.Item>
        ) : (
          <></>
        )}
        <Dropdown.Divider />
        <Dropdown.Item as={NavLink} to="/cart">
          Sepete Git
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
