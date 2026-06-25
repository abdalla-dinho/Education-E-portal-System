import Table from "../../UI/Table";

function ExamTableRow({ exams }) {
  const {
    marks,
    academic_year,
    Grade_point,
    grade,
    course: { name, code },
  } = exams;

  return (
    <Table.Row>
      <p>{code}</p>
      <p>{name}</p>
      <p>{academic_year}</p>
      <p>{marks}</p>
      <p>{grade}</p>
      <p>{Grade_point}</p>
    </Table.Row>
  );
}

export default ExamTableRow;
