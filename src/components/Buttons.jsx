import satData from "./satData";
import React from "react";


function Buttons({ filterByType, setSat, displaySats }) {
  return (
    <div>
      {displaySats.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
})}
  <button onClick={() => setSat(satData)}>
    Show All
  </button>
    </div>
  );
};

export default Buttons;