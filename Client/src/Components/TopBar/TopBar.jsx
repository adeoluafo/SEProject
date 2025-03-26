import React from "react";
import "./TopBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function TopBar() {
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
            <Nav.Link>Recipe</Nav.Link>
            <Nav.Link>Search</Nav.Link>
            <Nav.Link>Favorites</Nav.Link>
          </Nav>
          <Nav>
            <Button style={{ marginRight: "10px" }} variant="outline-primary">
              Sign In
            </Button>
            <Button variant="danger">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
