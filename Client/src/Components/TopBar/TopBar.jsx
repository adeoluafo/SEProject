import React from "react";
import "./TopBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";

export default function TopBar() {
  const { userContext, setUserContext } = useContext(UserContext);
  const handleSignOut = () => {
    setUserContext(null);
  };
  return (
    <Navbar
      fixed="top"
      style={{
        display: "flex",
        flexWrap: "nowrap",
        Width: "100%",
        margin: "30px",
        marginLeft: "10%",
        marginRight: "10%",
        borderRadius: "10px",
        borderColor: "rgb(221, 111, 130)",

        borderStyle: "outset",
      }}
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand
          style={{
            color: "rgb(221, 111, 130)",
            font: "caption",
            marginRight: "80px",
          }}
        >
          Adeolu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Dashboard</Nav.Link>
            <Nav.Link>Search</Nav.Link>
            <Nav.Link>Favorites</Nav.Link>
          </Nav>
          <Nav>
            {userContext != null ? (
              <>
                <FaRegUserCircle
                  style={{ fontSize: "28px", marginTop: "5px" }}
                />
                &nbsp;
                <Button variant="danger" onClick={() => handleSignOut()}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <LoginModal />
                <SignUpModal />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
