import React from "react";
import { useGetProductsQuery } from "../../context/productApi";
import Product from "../../components/product/Product";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Shop from "../../components/shop/Shop";
import Choose from "../../components/choose/Choose";

const Home = () => {
  const { data, isLoading } = useGetProductsQuery();
  return (
    <div>
      <Hero />
      <Product data={data?.products} loading={isLoading} />
      <About />
      <Shop />
      <Choose />
    </div>
  );
};

export default Home;
