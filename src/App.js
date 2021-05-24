import "./styles.css";
import React, { useState, useReducer } from "react";
import RiverInformation from "../src/components/riverInformation";

export default function App() {
  const [river, setRiver] = useState({});
  const [show, toggle] = useReducer((state) => !state, true);

  return (
    <div className="wrapper">
      <h2>World's Longest Rivers</h2>
      <div>
        <button onClick={toggle}>Toggle Details</button>
      </div>
      <button onClick={() => setRiver("nile")}>Nile</button>
      <button onClick={() => setRiver("amazon")}>Amazon</button>
      <button onClick={() => setRiver("yangtze")}>Yangtze</button>
      <button onClick={() => setRiver("mississippi")}>Mississippi</button>
      {show && <RiverInformation name={river} />}
    </div>
  );
}
