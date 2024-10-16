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

const BarchartComp = ({weeklyData, color, weekTitles}) => {

  return (
    <div className="relative col-span-2 w-full px-4 2xl:px-[68px] py-[26px] shadow-lg rounded-[10px]">
      <div className="w-full absolute bg-white font-medium grid grid-cols-2 px-10">
      <h2>Daily Statistics</h2>
      <h2 className="text-end">
              {weekTitles}
        </h2>
      </div>
       <ResponsiveContainer width="100%" height={356}>
        <BarChart
          width="100%"
          height="100%"
          barSize={5}
          data={weeklyData}
          margin={{
            top: 0,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeArray="1" color="#CDBAEE" vertical={false} />
          <XAxis dataKey="day" axisLine={false}  tickLine={false} />
          <YAxis axisLine={false} domain={[0,'auto']} ticks={[1, 2, 3, 4, 5]} tickLine={false} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="value"
            radius={[2,2,2,2]}
            fill={color}
            activeBar={
              <Rectangle
                fill="pink"
                stroke="blue"
                labelLine={false}
              />
            }
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarchartComp;
