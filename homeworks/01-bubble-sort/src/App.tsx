import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import "./App.css";

function generateCols():void {
  console.log("::: generateCols");
}

function startSorting():void {
  console.log("::: startSorting");
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer generate={generateCols} start={startSorting} />
    </div>
  );
}

export default App;
