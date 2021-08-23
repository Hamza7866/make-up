import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "./Products";
const API =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick";

const Skincare = ({ title }) => {
  const [isloading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    setIsLoading(true);
    const products = await axios.get(API);
    const { data } = products;
    setProducts(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <section className="pt-3 bg-secondary">
      <h1 className="text-center pb-3 text-success">{title}</h1>
      {products.map((product) => {
        return <Products product={product} key={product.id} />;
      })}
    </section>
  );
};

export default Skincare;
