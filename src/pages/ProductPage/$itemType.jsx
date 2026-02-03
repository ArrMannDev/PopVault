import { useParams } from "react-router";
import { Box } from "@mui/material";
import CardComponent from "../../componentens/CardComponent";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductShowCase() {
  const { itemType } = useParams();
  const [productData, setProductData] = useState([]);

  const normalize = (value = "") =>
    value.toLowerCase().trim().replace(/\s+/g, "-"); // space → hyphen

  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5300/blind-box-items",
        );

        const filteredData = response.data.filter(
          (item) => normalize(item?.package?.itemType) === normalize(itemType),
        );

        setProductData(filteredData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (itemType) {
      getProductData();
    }
  }, [itemType]);

  return (
    <Box>
      <CardComponent newItemData={productData} />
    </Box>
  );
}
