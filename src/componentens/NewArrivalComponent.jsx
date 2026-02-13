import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import CardComponent from "./CardComponent";
import { Typography } from "@mui/material";

export default function NewArrivalComponent() {
  const [newItemData, setNewItemData] = useState([]);

  const getNewItemsData = async () => {
    await axios
      .get("http://localhost:5300/blind-box-packages")
      .then((response) => {
        console.log("Status Code:", response.status);
        console.log("Response Data:", response.data);

        const newArrivalData = response.data.filter(
          (item) => item.productType === "New Arrival",
        );

        setNewItemData(newArrivalData);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Status Code:", error.response.status);
          console.log("Error Data:", error.response.data);
        } else {
          console.log("Error:", error.message);
        }
      });
  };

  useEffect(() => {
    getNewItemsData();
  }, []);

  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          p: 2,
          fontFamily: "Poppins",
          fontWeight: "700",
          fontSize: "40px",
        }}
      >
        New Products
      </Typography>
      <CardComponent newItemData={newItemData} />
    </Box>
  );
}
