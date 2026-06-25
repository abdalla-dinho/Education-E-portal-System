import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Header from "./Header";

import styled from "styled-components";

import { calculateGp } from "../Hooks/calculateGpa";
import { useExam } from "../features/Exams/useExams";

const StyledCharts = styled.div`
  display: flex;
  /* align-items: center; */
  margin: 3rem 1rem;
  flex-direction: column;
  gap: 3rem;
`;

function ComposedCharts() {
  const { exams, isLoading } = useExam();

  if (isLoading) return null;

  const { marks } = calculateGp(exams);

  const data = marks.map((mrk, i) => {
    return { name: `semester ${[i + 1]}`, marks: mrk };
  });

  return (
    <StyledCharts>
      <Header pos="h3">Avg Marks scored per semester </Header>

      <ComposedChart width={800} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="marks" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="marks" stroke="#ff7300" />
      </ComposedChart>
    </StyledCharts>
  );
}

export default ComposedCharts;
