import Stats from "./Components/Stats";
import Chart from "./Components/Chart";

export default function InfoCard({ totalIncome, totalExpense }) {
  return (
    <div className="card dark info-card-wrapper">
      <Stats totalIncome={totalIncome} totalExpense={totalExpense} />
      <Chart totalIncome={totalIncome} totalExpense={totalExpense} />
    </div>
  );
}
