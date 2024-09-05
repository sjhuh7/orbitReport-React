import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import satData from "./components/satData";
import React, {useState} from 'react'

// function App() {
//     const [sat, setSat] = useState(satData);
//     const filterByType = (currentType) => {
//       const filteredSats =satData.filter((newSatDisplay) =>{
//         return newSatDisplay.orbitType === currentType
//       })
//       setSat(filteredSats)
//     }
  
//   return (
//     <div>
//       <Banner />
//       <Buttons />
//         filterByType={filterByType}
//         setSat={setSat}
//         displaySats={displaySats}
//       <Table sat={sat} />
//     </div>
//   );

// }

function App() {
  const [sat, setSat] = useState(satData); 

  const filterByType = (currentType) => {
      const filteredSats = satData.filter((newSatDisplay) => {
          return newSatDisplay.orbitType === currentType; 
      });
      setSat(filteredSats); 
  };

  return (
      <div>
          <Banner />
          {}
          <Buttons 
              filterByType={filterByType}  
              setSat={setSat}             
              displaySats={sat}            
          />
          <Table sat={sat} />  
      </div>
  );
}






export default App;