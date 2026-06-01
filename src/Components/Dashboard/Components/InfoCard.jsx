import Stats from "./Components/Stats";
import Chart from "./Components/Chart";

export default function InfoCard({ totalIncome, totalExpense }) {
  return (
    <div
      className="card dark"
      style={{
        width: "30vh",
        height: "35vh",
        marginTop: "2rem",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        padding: "1.2rem",
        gap: "1rem",
        boxSizing: "border-box",
      }}
    >
      <Stats totalIncome={totalIncome} totalExpense={totalExpense} />

      <Chart totalIncome={totalIncome} totalExpense={totalExpense} />
    </div>
  );
}
