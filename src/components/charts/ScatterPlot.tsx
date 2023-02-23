// Import required modules
import React, { useState } from "react";
import ReactECharts from "echarts-for-react";

// for the WineDataSet type
type WineData = {
  "Color intensity": number | string;
  Hue: number;
};
//for the Props type for the ScatterPlot component
type Props = {
  data: WineData[];
};

//for the ScatterPlot functional component
const ScatterPlot: React.FC<Props> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  // for the ECharts option
  const option = {
    title: {
      text: "Scatter Plot",
      textStyle: {
        fontWeight: "bold",
        fontSize: 18,
      },
      left: "center",
      top: "5%",
    },

    xAxis: {
      type: "value",
      name: "Color Intensity",

      nameLocation: "middle",
      nameGap: 25,
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      type: "value",
      name: "Hue",
      nameLocation: "middle",
      nameGap: 20,
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "5%",
      containLabel: true,
    },
    axisLabel: {
      interval: 0,
      rotate: -45,
      margin: 10,
    },
    series: [
      {
        data: data.map((el) => [el["Color intensity"], el["Hue"]]),
        type: "scatter",
        symbolSize: 10,
        smooth: true,
        itemStyle: {
          color: "red",
          opacity: 0.8,
        },
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

export default ScatterPlot;
