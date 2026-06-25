import getSemester from "./getSemester";

function calculateGpa(cgpa) {
  if (cgpa >= 4.5) return "First Class Honours";
  if (cgpa >= 3.5) return "Second Class Upper Division";
  if (cgpa >= 2.4) return "Second Class Lower Division";
  if (cgpa >= 1.5) return "Third Class";
  if (cgpa >= 1.0) return "Pass";
  if (cgpa < 1.0) return "Fail";
}

export function calculateGp(exams) {
  const semesters = getSemester(exams);

  const gps = Object.entries(semesters)
    .map(([_, courses]) => {
      const totalUnits = courses.reduce((acc, c) => acc + c.course.unit, 0);
      if (totalUnits === 0) return null;
      const totalPoints = courses.reduce(
        (acc, c) => acc + c.Grade_point * c.course.unit,
        0
      );
      return totalUnits ? totalPoints / totalUnits : 0;
    })
    .filter(Boolean);

  const marks = Object.entries(semesters)
    .map(([key, courses]) => {
      const totalMarks = courses
        .map((c) => c.marks)
        .reduce((acc, cur) => acc + cur, 0);

      if (!totalMarks) return null;

      const numCourses = courses.length;

      const average = totalMarks / numCourses;
      return average.toFixed(2, 0);
    })
    .filter(Boolean);

  // courses.map((c) => c.marks).reduce((acc, cur) => acc + cur, 0);

  return { gps, marks };
}

export default calculateGpa;
