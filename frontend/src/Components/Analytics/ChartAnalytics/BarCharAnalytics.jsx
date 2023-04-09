import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function BarChartAnalytics() {
  const { userTop, postTop } = useSelector((state) => state.analytics);
  const userData = userTop.map((elem) => elem.postCount);
  console.log("Test:", userData);
  const data = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Post count of user",
        data: userTop.map((elem) => elem.postCount),
        backgroundColor: "rgba(255, 99, 132, 0.6)", // Color of the bars
      },
      {
        label: "Likes of post",
        data: postTop.map((elem) => elem.likes),
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Color of the bars
      },
    ],
  };

  // Define options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-light p-3 rounded-4" style={{ height: "300px" }}>
      <Bar data={data} options={options} />
    </div>
  );
}
