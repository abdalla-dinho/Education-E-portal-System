import Table from "../../UI/Table";
import CourseOverviewRow from "./CourseOverviewRow";
// import { data } from "../../data/data";
import Header from "../../UI/Header";
import { useCourse } from "./useCourse";

import { ErrorMessage } from "../../UI/ErrorMessage";

function CourseOverview() {
  const { courses } = useCourse();

  // if (!filtredCourses.length) return <p>No data available to show</p>;

  return (
    <>
      <Header as="h1" pos="firstHeader">
        Course overview
      </Header>
      <Table columns="0.7fr 1fr 0.8fr 0.6fr">
        <Table.Header>
          <p>Course Code</p>
          <p>Course Title </p>
          <p>Intsructor</p>
          <p>Unit</p>
        </Table.Header>

        {!courses.length && (
          <ErrorMessage>No data is availabe to show at the moment</ErrorMessage>
        )}

        <Table.Row>
          {courses.map((course) => (
            <CourseOverviewRow course={course} key={course.id} />
          ))}
        </Table.Row>
      </Table>
    </>
  );
}

export default CourseOverview;
