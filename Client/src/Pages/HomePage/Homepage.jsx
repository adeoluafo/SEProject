import React from "react";
import "./Homepage.css";
import TopBar from "../../Components/TopBar/TopBar";
import Mission from "../../Components/Mission/Mission";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftPanelSearch from "../../Components/LeftPanelSearch/LeftPanelSearch";

export default function HomePage() {
  return (
    <div>
      <TopBar />
      <Stack gap={3}>
        <Mission />
        <Container>
          <Row>
            <Col>
              <LeftPanelSearch />
            </Col>
            <Col xs={10}>2 of 3 (wider)</Col>
          </Row>
        </Container>
      </Stack>
    </div>
  );
}
