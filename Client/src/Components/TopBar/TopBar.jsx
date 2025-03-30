import React from "react";
import "./TopBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { supabase } from "../../client";

export default function TopBar() {
  // const login = async () => {
  //   // const { data, error } = await supabase.auth.signUp({
  //   //   email: "chinyere.offor@lions.lincoln.edu",
  //   //   password: "password2",
  //   // });
  //   const { data, error } = await supabase.auth.signInWithPassword({
  //     email: "chinyere.offor@lions.lincoln.edu",
  //     password: "password2",
  //   });
  //   console.log(data);
  // };

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
