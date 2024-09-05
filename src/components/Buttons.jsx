import satData from "./satData";
import React from "react";


// function Buttons({ filterByType, setSat, displaySats }) {
//   return (
//     <div>
//       {displaySats.map((sat, id) => {
//   return (
//     <button onClick={() => filterByType(sat.orbitType)} key={id}>
//       {sat.orbitType} Orbit
//     </button>
//   );
// })}
//   <button onClick={() => setSat(satData)}>
//     Show All satellites
//   </button>
//     </div>
//   );
// };


function Buttons({ filterByType, setSat, displaySats }) {
  // Get unique orbit types
  const newOrbitTypes = [...new Set(displaySats.map(sat => sat.orbitType))];

  return (
    <div>
      {
        newOrbitTypes.map((orbitType, id) => {
          return (
            <button
              onClick={() => filterByType(orbitType)}
              key={id}
            >
              {orbitType} Orbit
            </button>
          );
        })
      }
      <button
        onClick={() => setSat(satData)}
      >
        All Orbit
      </button>
    </div>
  );
}



export default Buttons;