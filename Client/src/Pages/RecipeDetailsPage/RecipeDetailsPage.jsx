import React, { useEffect } from "react";
import "./RecipeDetailsPage.css";
import { useLocation } from "react-router-dom";
import TopBar from "../../Components/TopBar/TopBar";
import Stack from "react-bootstrap/esm/Stack";
import { useState } from "react";
import { supabase } from "../../client";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function RecipeDetailsPage() {
  const location = useLocation();
  const Id_data = location.state; // Access the passed props
  const Id = Id_data.recipeId;
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const { data, error } = await supabase
          .from("Recipes")
          .select()
          .eq("id", Id);
        if (error == null) {
          setRecipe(data[0]);
        } else {
          alert(error);
        }
      } catch (error) {
        alert("Fetch Recipe failed: " + error);
      }
    };
    if (Id) {
      fetchRecipe();
    }
  }, []);
  console.log(recipe);
  return (
    <div>
      <TopBar />
      {recipe != null && (
        <Stack gap={3}>
          <Container>
            <Row style={{ marginTop: "70px" }}>
              <Col>
                <Image src={recipe.image_url} rounded />
              </Col>
              <Col>{recipe.title}</Col>
            </Row>
          </Container>
        </Stack>
      )}
    </div>
  );
}
