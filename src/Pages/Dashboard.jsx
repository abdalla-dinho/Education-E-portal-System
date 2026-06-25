import styled from "styled-components";
import DashboardLineCharts from "../UI/LineChart";
import ComposedCharts from "../UI/ComposedCharts";

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: start;
  padding-top: 4rem;
`;

function Dashboard() {
  return (
    <StyledDashboard>
      <DashboardLineCharts />
      <ComposedCharts />
    </StyledDashboard>
  );
}

export default Dashboard;
