import React from "react";
import TopBar from "../../Components/TopBar/TopBar";
import Stack from "react-bootstrap/esm/Stack";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";

export default function DashboardPage() {
  const { userContext } = useContext(UserContext);
  return (
    <div>
      <TopBar />
      <Stack gap={3} style={{ marginTop: "70px" }}>
        <Container>
          <Card style={{ backgroundColor: "rgba(255, 192, 203, 0.63);" }}>
            <Row>
              <Col>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/10337/10337609.png"
                  style={{ width: "50%" }}
                />
                <h6 style={{ marginTop: "12px" }}>{userContext.email}</h6>
              </Col>
              <Col style={{ textAlign: "left" }}>
                <h4>👋 Hey there, Kitchen Star!✨</h4> <br />
                <p>
                  Welcome to your recipe dashboard! 🍽️
                  <br />
                  Here’s what you can do:
                  <br />
                  📝 Create tasty new recipes from scratch
                  <br />
                  🧂 Edit and spice up your existing creations
                  <br />
                  🚀 Publish drafts when they’re ready to shine
                  <br />
                  🗂️ View all your published masterpieces
                  <br />
                  🗑️ Delete the ones that didn’t quite hit the spot
                  <br />
                </p>
                Let’s get cooking! 👩🏾‍🍳🔥
              </Col>
            </Row>
          </Card>
        </Container>
      </Stack>
    </div>
  );
}
