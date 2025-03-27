import React from "react";
import "./LeftPanelSearch.css";
import Form from "react-bootstrap/Form";

export default function LeftPanelSearch() {
  return (
    <div style={{ textAlign: "left", marginTop: "20px" }}>
      <h2 style={{ marginBottom: "30px" }}>Recipes</h2>
      <Form.Select
        aria-label="Default select example"
        style={{ marginBottom: "22px" }}
      >
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        style={{ marginBottom: "22px" }}
      >
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
}
