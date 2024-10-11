import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Button from "./Button";

const PieChartAnalytics = () => {
  const pieData = [
    {
      name: "Week1",
      value: 150,
      no:1
    },
    {
      name: "Week2",
      value: 280,
      no:2
    },
    {
      name: "week3",
      value: 250,
      no: 3
    },
    {
      name: "Week4",
      value: 320,
      no:4
    },
  ];

  const colors = ["#FF5252", "#FBE077", "#B8A2FA", "#795CD0"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const percentageText = `${(percent * 100).toFixed(0)}%`;

    return (
      // <g>
      //   {/* Draw the background rectangle */}
      //   <rect
      //     x={x - 10} // Adjust position to center the background behind text
      //     y={y - 15} // Adjust position to center vertically
      //     width={60} // Width of the background rectangle
      //     height={30} // Height of the background rectangle
      //     fill="#F3F3F399" // Background color with transparency
      //     rx={5} // Rounded corners
      //   />
      <text
        x={x}
        y={y}
        fill={"white"}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
        {percentageText}
      </text>
      // </g>
    );
  };

  const renderCustomLegend = (props) => {
    const { payload } = props; // `payload` contains legend data (name, color, value)
    return (
      <ul className="w-2/3 sm:w-2/5 mx-auto grid grid-cols-2 place-content-center list-none p-0 gap-1">
        {payload.map((entry, index) => (
          <li
            key={`item-${index}`}
            style={{ display: "flex", alignItems: "center" }}
          >
            <span
              className={`inline-block w-3 h-3 rounded-full mr-2`}
              style={{ backgroundColor: entry.color }}
            ></span>
            {entry.value}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="" style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            // outerRadius={80}
            fill="#82ca9d"
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Legend content={renderCustomLegend} />
          {/* Add text in the middle of the pie chart */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={20}
            fontWeight="bold"
            fill="#000"
          >
            PIE CHART
          </text>
        </PieChart>
        <div className="flex justify-center my-16">
        <button className="bg-[#6750A4] text-white w-max py-[10px] px-6 rounded-full">Close</button>
      </div> 
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartAnalytics;
