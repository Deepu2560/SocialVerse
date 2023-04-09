import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

export default function PieChartAnalytics() {
  // Data for the pie chart
  const data = {
    labels: ["users", "posts"],
    datasets: [
      {
        data: [12, 19],
        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
}
