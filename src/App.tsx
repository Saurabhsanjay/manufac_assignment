import React, { useState, useEffect } from "react";

import "./App.css";
import ScatterPlot from "./components/charts/ScatterPlot";
import BarChart from "./components/charts/BarChart";
import wineData from "../src/data/Wine-Data.json";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="marquee">
        <span>Wine Data Visualization</span>
      </div>

      {isLoading ? (
        <Loader/>
      ) : (
        <>
          <div>
            <ScatterPlot data={wineData} />
          </div>
          <hr className="styled-line" />
          <div>
            <BarChart data={wineData} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
