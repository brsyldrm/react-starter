import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import { useSelector } from "react-redux";
import CartSummary from "./CartSummary";
import SignedIn from "./Signedin";
import SignedOut from "./SignedOut";
import { useNavigate } from "react-router-dom";

export default function Navi() {

  const { cartItems } = useSelector(state => state.cart)

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let navigate = useNavigate();

  function handleSignOut() {
    setIsAuthenticated(false);
    navigate("/");
  }
  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary />}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} bisey="1" />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
