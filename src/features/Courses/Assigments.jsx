import { ErrorMessage } from "../../UI/ErrorMessage";

import Header from "../../UI/Header";
import Table from "../../UI/Table";
import AssigmentsRow from "./AssigmentsRow";
import { useAssigment } from "./useAssigment";

function Assigments() {
  const { assigments } = useAssigment();

  return (
    <>
      <Header as="h1">Course Assigments</Header>
      <Table columns="1fr 1fr 1fr 1fr">
        <Table.Header>
          <p>Assigment Title</p>
          <p>Course </p>
          <p>Due Date</p>
          <p>Status</p>
        </Table.Header>

        {!assigments.length && (
          <ErrorMessage>No data is availabe to show at the moment</ErrorMessage>
        )}

        <Table.Row>
          {assigments.map((assigment) => (
            <AssigmentsRow assigment={assigment} key={assigment.id} />
          ))}
        </Table.Row>
      </Table>
    </>
  );
}

export default Assigments;
