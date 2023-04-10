import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartAnalytics() {
  const { userTotal, postTotal } = useSelector((state) => state.analytics);
  // Data for the pie chart
  const data = {
    labels: ["Total users", "Total posts"],
    datasets: [
      {
        data: [userTotal, postTotal],
        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
      },
    ],
  };

  return (
    <div className="bg-light p-3 rounded-4 w-50" style={{ height: "300px" }}>
      <Pie data={data} />
    </div>
  );
}
