// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export default function DashboardChart({ totalIncome, totalExpense }) {
  return (
    <div
      style={{
        flex: 1,
        minHeight: "150px",
        position: "relative",
        backgroundColor: "rgba(0, 0, 0, 0.15)",
        border: "1px solid rgba(255, 255, 255, 0.03)",
        borderRadius: "8px",
        color: "#475569",
        boxShadow: "inset 0 4px 15px rgba(0,0,0,0.2)",
        padding: "1rem",
      }}
    >
      {totalIncome > 0 || totalExpense > 0 ? (
        <Doughnut
          data={{
            labels: ["Income", "Expense"],
            datasets: [
              {
                label: "Amount",
                data: [totalIncome, totalExpense],
                backgroundColor: ["#22c5c2", "#ef449c"],
                borderWidth: 0,
                hoverOffset: 4,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <span>No data available</span>
        </div>
      )}
    </div>
  );
}
