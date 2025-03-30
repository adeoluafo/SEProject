import React from "react";
import "./Homepage.css";
import TopBar from "../../Components/TopBar/TopBar";
import Mission from "../../Components/Mission/Mission";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftPanelSearch from "../../Components/LeftPanelSearch/LeftPanelSearch";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Grid from "../../Components/Grid/Grid";
import Youtube from "../../Components/Youtube/Youtube";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";

export default function HomePage() {
  useEffect(() => {}, []);
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
            <Col xs={9}>
              <SearchBar />
              <Grid />
            </Col>
          </Row>
        </Container>
        <Youtube />
        <Footer />
      </Stack>
    </div>
  );
}
