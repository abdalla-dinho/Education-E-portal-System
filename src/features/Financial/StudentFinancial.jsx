import styled from "styled-components";
import Table from "../../UI/Table";

import StudentFinanceRow from "./StudentFinanceRow";

const StyledStudentFinancial = styled.div`
  padding: 2rem 0;
`;

function StudentFinancial() {
  return (
    <StyledStudentFinancial>
      <Table columns="1fr 0.8fr 1.6fr 1.2fr 0.8fr 0.8fr 0.8fr">
        <Table.Header>
          <p>Date</p>
          <p>Ref no</p>
          <p>Particuls</p>
          <p>Entred_By</p>
          <p>CR</p>
          <p>DR</p>
          <p>Balance</p>
        </Table.Header>

        <StudentFinanceRow />
      </Table>
    </StyledStudentFinancial>
  );
}

export default StudentFinancial;
