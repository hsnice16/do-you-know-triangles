import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("Learn");

  return (
    <div className="App">
      <Header
        currentSelectedTab={currentSelectedTab}
        setCurrentSelectedTab={setCurrentSelectedTab}
      />
      <Main currentSelectedTab={currentSelectedTab} />
      <Footer />
    </div>
  );
}
