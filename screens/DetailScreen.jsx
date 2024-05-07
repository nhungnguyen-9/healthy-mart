import React from "react";
import ProductDetail from "../components/product-detail";
const DetailScreen = ({ route, navigation }) => {
  const data = route.params;
  return <ProductDetail data={data} />;
};

export default DetailScreen;
