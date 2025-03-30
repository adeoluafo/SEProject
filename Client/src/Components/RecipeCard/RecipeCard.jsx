import React from "react";
import "./RecipeCard.css";
import Card from "react-bootstrap/Card";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function RecipeCard() {
  return (
    <Card
      style={{
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2",
      }}
    >
      <Card.Img
        variant="top"
        src="https://media.istockphoto.com/id/833390070/photo/arabic-dishes-and-meze.jpg?s=612x612&w=0&k=20&c=MtWWS3THa19Mnb96iOGfpxOGwdmYNM-Xi0_zAEW9mTY="
      />
      <Card.Body>
        <Row>
          <Col xs={9}>
            <Card.Title>Rice</Card.Title>
          </Col>
          <Col>
            <FcLike style={{ fontSize: "25px" }} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
