import Header from "../../UI/Header";
import ZebraTable from "../../UI/ZebraTable";
import CourseSchdlingRow from "./courseSchdlingRow";
import { useCourseScheduling } from "./useCourseScheduling";

import { ErrorMessage } from "../../UI/ErrorMessage";

function CourseScheduling() {
  const { scheduling } = useCourseScheduling();

  return (
    <>
      <Header as="h1">Course scheduling</Header>
      <ZebraTable>
        <ZebraTable.Header>
          <p>Day</p>
          <p>Time </p>
          <p>Course</p>
          <p>Duration</p>
        </ZebraTable.Header>
        {!scheduling.length && (
          <ErrorMessage>No data is availabe to show at the moment</ErrorMessage>
        )}
        {scheduling.map((sch) => (
          <CourseSchdlingRow key={sch.id} courseSched={sch} />
        ))}
        {/* <ZebraTable.Row></ZebraTable.Row> */}
      </ZebraTable>
    </>
  );
}

export default CourseScheduling;
