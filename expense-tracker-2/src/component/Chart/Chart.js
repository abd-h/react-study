import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const maximumValue = Math.max(...props.dataPoints.map(({ value }) => value));

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maximumValue}
        />
      ))}
    </div>
  );
};

export default Chart;
