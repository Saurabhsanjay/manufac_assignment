// Import required modules
import React, { useState } from "react";
import ReactECharts from "echarts-for-react";


// for the WineDataSet type
type WineDataSet = {
  Alcohol: number;
  "Malic Acid": number;
  Ash: number | string;
  "Alcalinity of ash": number;
  Magnesium: number;
  "Total phenols": number;
  Flavanoids: number | string;
  "Nonflavanoid phenols": number | string;
  Proanthocyanins: string;
  "Color intensity": number | string;
  Hue: number;
  "OD280/OD315 of diluted wines": number | string;
  Unknown: number;
};
//for the Props type for the BarChart component
type Props = {
  data: WineDataSet[];
};

//for the BarChart functional component
const BarChart: React.FC<Props> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);


//  a function to calculate the average of a property in the WineDataSet
  const handleAverage = (props: keyof WineDataSet, data: WineDataSet[]) => {
    const sum = data.reduce((acc, el) => acc + +el[props], 0);
    return (sum / data.length).toFixed(3);
  };


  // for the ECharts option
  const option = {
    title: {
      text: "Bar Chart",
      textStyle: {
        fontWeight: "bold",
        fontSize: 18,
      },
      left: "center",
      top: "5%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      nameLocation: "middle",
      nameGap: 30,
      name: "Alcohol",
      data: ["Class 1", "Class 2", "Class 3"],
    },
    axisLabel: {
      fontSize: 12, // adjust font size
      lineHeight: 16,
      interval: 0,
    },
    yAxis: {
      type: "value",
      nameGap: 20,
      nameLocation: "middle",
      name: "Malic Acid (Average)",
    },
    series: [
      {
        name: "Malic Acid",
        type: "bar",
        smooth: true,
        data: [
          handleAverage(
            "Malic Acid",
            data.filter((el) => el.Alcohol === 1)
          ),
          handleAverage(
            "Malic Acid",
            data.filter((el) => el.Alcohol === 2)
          ),
          handleAverage(
            "Malic Acid",
            data.filter((el) => el.Alcohol === 3)
          ),
        ],
      },
    ],
  };

  return (
   // Render the  chart using the option and state
    <ReactECharts
      option={option}
      showLoading={isLoading}
      onChartReady={() => setIsLoading(false)}
      style={{
        width: "100%",
        height: "400px",
        padding: "30px 20px",
        boxSizing: "border-box",
      }}
    />
  );
};

export default BarChart;
