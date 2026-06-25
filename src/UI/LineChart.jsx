import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";

import Header from "./Header";
import SpinnerFull from "./SpinnerFull";

import { calculateGp } from "../Hooks/calculateGpa";
import { useExam } from "../features/Exams/useExams";

function DashboardLineCharts() {
  const { exams, isLoading } = useExam();

  if (isLoading) return <SpinnerFull />;

  const { gps } = calculateGp(exams);

  const data = gps.map((gp, i) => {
    return { name: `semester ${[i + 1]}`, GPA: gp };
  });

  return (
    <div>
      <Header as="h1">GPA Trend (Line Chart)</Header>
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 40, right: 10 }}
      >
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
        <Line
          dataKey="GPA"
          type="monotone"
          stroke="purple"
          strokeWidth={2}
          name="Semeseter line chart "
        />
        <XAxis dataKey="name" />
        <YAxis label={{ value: "GPA", position: "insideLeft", angle: -90 }} />
        <Legend align="right" />
      </LineChart>
    </div>
  );
}

export default DashboardLineCharts;
