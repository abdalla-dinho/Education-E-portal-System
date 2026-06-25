import { supabase } from "../../supabase";
import { displayErrMessage } from "../utilities/helper";
import { getStudent } from "./authApi";

export async function getCourses(year, sem) {
  const studentData = await getStudent();

  const { major_id } = studentData;

  let { data: Courses, error } = await supabase
    .from("Courses")
    .select("*,semester_id!inner(year, semester)")
    .eq("major_id", major_id)
    .eq("semester_id.year", year)
    .eq("semester_id.semester", sem);

  if (error) displayErrMessage(error.message);

  return Courses;
}

export async function getAssigments(year, sem) {
  const studentData = await getStudent();
  const { id } = studentData;

  // console.log(id);

  let { data, error } = await supabase
    .from("Assigments")
    .select("*,semester_id!inner(year, semester),course:course(name)")
    .eq("student_id", id)
    .eq("semester_id.year", year)
    .eq("semester_id.semester", sem);

  if (error) displayErrMessage(error.message);

  return data;
}

export async function getCourseScheduling(year, sem) {
  const studentData = await getStudent();
  const { major_id } = studentData;

  let { data: course_scheduling, error } = await supabase
    .from("course_scheduling")
    .select("*, course_name(name),semester_id!inner(year,semester)")
    .eq("major_id", major_id)
    .eq("semester_id.year", year)
    .eq("semester_id.semester", sem);

  if (error) displayErrMessage(error.message);

  return course_scheduling;
}
