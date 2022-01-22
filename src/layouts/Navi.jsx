import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Icon, Menu, Label, Image } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useNavigate } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  function handleSignIn() {
    setIsAuthenticated(true);
  }
  function handleSignOut() {
    setIsAuthenticated(false);
    navigate("/");
  }
  return (
    <Menu attached stackable inverted size="small">
      <Menu.Item>
        <Icon name="instagram" />
        <Icon name="facebook" />
        <Icon name="youtube" />
      </Menu.Item>
      <Menu.Item>
        <Image className="img" avatar spaced="right" src="./logo192.png" />
        <Label>React App</Label>
      </Menu.Item>
      <Menu.Menu position="right">
        <CartSummary />

        {isAuthenticated ? (
          <SignedIn signOut={handleSignOut} />
        ) : (
          <SignedOut signIn={handleSignIn} />
        )}
      </Menu.Menu>
    </Menu>
  );
}
