import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
