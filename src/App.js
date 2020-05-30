import React from 'react';
import './App.css';
import ProductNav from "./components/ProductNav";
import MainNav from "./components/MainNav";
import Hero from "./components/Hero";
import MediaSlider from "./components/MediaSlider";
import DesktopLibrary from "./components/DesktopLibrary";
import EquipVisual from "./components/EquipVisual";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      <header>
        <ProductNav />
        <MainNav />
      </header>

      <Hero />
      <MediaSlider />
      <DesktopLibrary />
      <EquipVisual />
      <Footer />
    </div>
  );
}

export default App;
