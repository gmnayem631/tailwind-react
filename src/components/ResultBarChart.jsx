import React from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const ResultBarChart = () => {
  const resultDataBar = [
    {
      id: 1,
      name: "Hank",
      physics: 85,
      chemistry: 78,
      math: 92,
    },
    {
      id: 2,
      name: "Robert",
      physics: 74,
      chemistry: 81,
      math: 69,
    },
    {
      id: 3,
      name: "Gia",
      physics: 91,
      chemistry: 88,
      math: 95,
    },
    {
      id: 4,
      name: "Scott",
      physics: 67,
      chemistry: 73,
      math: 70,
    },
    {
      id: 5,
      name: "Peter",
      physics: 88,
      chemistry: 79,
      math: 84,
    },
    {
      id: 6,
      name: "Travis",
      physics: 72,
      chemistry: 69,
      math: 75,
    },
    {
      id: 7,
      name: "Morgan",
      physics: 83,
      chemistry: 90,
      math: 87,
    },
    {
      id: 8,
      name: "Raphael",
      physics: 76,
      chemistry: 71,
      math: 80,
    },
  ];
  return (
    <div>
      <BarChart
        style={{
          width: "1200px",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        data={resultDataBar}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={"physics"} isAnimationActive={true} fill="#82ca9d"></Bar>
        <Bar
          dataKey={"chemistry"}
          isAnimationActive={true}
          fill="#8884d8"
        ></Bar>
        <Bar dataKey={"math"} isAnimationActive={true} fill="#d4d459"></Bar>
      </BarChart>
    </div>
  );
};

export default ResultBarChart;
