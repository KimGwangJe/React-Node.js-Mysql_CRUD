/*eslint-disable*/
import React from "react";
import Create from "./Create";
import Select from "./Select";
import "./Bpp.css";

function Main() {
  return (
    <div className="center">
      <div>
        <h1>TODOLIST(CSS X)</h1>
        <Create />
        <br />
        <br />
        <div className="map">
          <Select />
        </div>
      </div>
    </div>
  );
}

export default Main;
