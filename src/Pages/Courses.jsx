import Filter from "../UI/Filter";
import CoursesTable from "../features/Courses/CoursesTable";

function Courses() {
  return (
    <>
      <Filter
        type="select"
        yearOptions={[
          { label: "1", value: 1 },
          { label: "2", value: 2 },
          { label: "3", value: 3 },
        ]}
        semesterOptions={[
          { label: "1", value: 1 },
          { label: "2", value: 2 },
        ]}
      />

      <CoursesTable />
    </>
  );
}

export default Courses;
