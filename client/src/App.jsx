import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
