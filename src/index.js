import React from "react";
import ReactDOM from "react-dom";
import Table from "./table";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div class="heading">Campaign List</div>
      <Table />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
