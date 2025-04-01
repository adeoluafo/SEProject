import React from "react";
import "./RecipeCard.css";
import Card from "react-bootstrap/Card";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

export default function RecipeCard({ image, title, id }) {
  return (
    <Card
      style={{
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2",
      }}
    >
      <Link to={`/recipe/${id}`} state={{ recipeId: id }}>
        <Card.Img variant="top" src={image} />
      </Link>

      <Card.Body>
        <Row>
          <Col xs={9}>
            <Card.Title>{title}</Card.Title>
          </Col>
          <Col>
            <FcLike style={{ fontSize: "25px" }} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
