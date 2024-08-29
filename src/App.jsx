import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import satData from "./components/satData";
import React, {useState} from 'react'

function App() {
    const [sat, setSat] =
  useState(satData);
    const displaySats = 
  satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
  });
  setSat(displaySats)
  return (
    <div>
      <Banner />
      <Buttons />
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      <Table />
    </div>
  );

const filterByType = (currentType) => {
  const newSatDisplay = satData.filter()
}
}



export default App;