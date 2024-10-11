import { Legend } from "@headlessui/react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import BarchartComp from "./BarChartComponent";

const BarChartsAnalytics = () => {
  // color={"blue"} weeklyData={weeklyData}

  const weeklyData = [
    [
      {
        day: "Sun",
        value: 1.1,
      },
      {
        day: "Mon",
        value: 3.2,
      },
      {
        day: "Tue",
        value: 4.9,
      },
      {
        day: "Wed",
        value: 1.6,
      },
      {
        day: "Thu",
        value: 3.2,
      },
      {
        day: "Fri",
        value: 1.6,
      },
    ],
    [
      {
        day: "Sun",
        value: 1.1,
      },
      {
        day: "Mon",
        value: 3.2,
      },
      {
        day: "Tue",
        value: 3,
      },
      {
        day: "Wed",
        value: 4.5,
      },
      {
        day: "Thu",
        value: 1.8,
      },
      {
        day: "Fri",
        value: 1.6,
      },
    ],
    [
      {
        day: "Sun",
        value: 1.1,
      },
      {
        day: "Mon",
        value: 3.2,
      },
      {
        day: "Tue",
        value: 2,
      },
      {
        day: "Wed",
        value: 4.2,
      },
      {
        day: "Thu",
        value: 3.2,
      },
      {
        day: "Fri",
        value: 1.6,
      },
    ],
    [
      {
        day: "Sun",
        value: 1.1,
      },
      {
        day: "Mon",
        value: 1,
      },
      {
        day: "Tue",
        value: 0.9,
      },
      {
        day: "Wed",
        value: 1.5,
      },
      {
        day: "Thu",
        value: 3.2,
      },
      {
        day: "Fri",
        value: 1.6,
      },
    ],
  ];

  const color = ["#FFCC00", "#795CD0", "#0AA52CE5", "#B90D0DE5"];
  const renderCustomizedLabel = () => {};

  return (
    <div className="w-full px-4">
      {/* <ResponsiveContainer width="100%" height={356}>
        <BarChart
          width="100%"
          height={356}
          barSize={5}
          data={weeklyData}
          margin={{
            top: 0,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1" vertical={false} />
          <XAxis dataKey="day" axisLine={false}  tickLine={false} />
          <YAxis axisLine={false} domain={[0,'auto']} ticks={[1, 2, 3, 4, 5]} tickLine={false} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="value"
            fill={blue}
            activeBar={
              <Rectangle
                fill="pink"
                stroke="blue"
                labelLine={false}
                label={renderCustomizedLabel}
              />
            }
          />
        </BarChart>
      </ResponsiveContainer> */}
      <div className="grid md:grid-cols-4">
        {weeklyData.map((data, index) => (
          <BarchartComp color={color[index]} weeklyData={data} />
        ))}
      </div>
    </div>
  );
};

export default BarChartsAnalytics;
