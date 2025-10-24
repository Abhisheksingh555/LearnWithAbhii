import React from "react";
import Cardnumber from "./Cardnumber";
import Recentproject from "./Recentproject";
import Taskcopilation from "./Taskcopilation";

export default function Dashboard() {
  const fig = [
    { totalNumber: 20, color: "bg-blue-400", name: "Total Projects" },
    { totalNumber: 47, color: "bg-green-400", name: "Pending Tasks" },
    { totalNumber: 9, color: "bg-amber-600", name: "Team Members" },
  ];

  return (
    <div className="flex-1 p-6">
      <h1 className="text-4xl font-bold mb-8 mt-8 ml-16">Dashboard</h1>

      <div className="flex gap-8 justify-start ml-16 flex-wrap">
        {fig.map((ele, idx) => (
          <Cardnumber
            key={idx}
            totalNumber={ele.totalNumber}
            color={ele.color}
            name={ele.name}
          />
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-2xl p-8 mt-10 ml-16 mr-16">
        <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
        <div className="flex gap-8 flex-wrap">
          <div className="flex-1 min-w-[350px]">
            <Recentproject />
          </div>
          <div className="flex-1 min-w-[350px]">
            <Taskcopilation completed={75} />
          </div>
        </div>
      </div>
    </div>
  );
}
