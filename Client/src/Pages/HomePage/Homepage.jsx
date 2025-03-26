import React from "react";
import "./Homepage.css";
import TopBar from "../../Components/TopBar/TopBar";
import Mission from "../../Components/Mission/Mission";
import Stack from "react-bootstrap/Stack";

export default function HomePage() {
  return (
    <div>
      <TopBar />
      <Stack gap={3}>
        <Mission />
      </Stack>
    </div>
  );
}
