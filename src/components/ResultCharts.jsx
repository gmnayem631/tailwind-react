import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const ResultCharts = () => {
  const resultData = [
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
    <div className="my-5">
      <LineChart width={900} height={300} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip />
        <Legend />
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="chemistry" stroke="blue"></Line>
        <Line dataKey="physics" stroke="green"></Line>
      </LineChart>
    </div>
  );
};

export default ResultCharts;
