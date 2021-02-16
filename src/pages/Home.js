import React from 'react';
import Carrousel from "../components/Carrousel";
import BestSellingProducts from "../components/BestSellingProducts";
import AboutUs from "../components/AboutUs";
import "../index.css";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Carrousel />
        <BestSellingProducts />
        <AboutUs />
      </BrowserRouter>
    </>
  );
}