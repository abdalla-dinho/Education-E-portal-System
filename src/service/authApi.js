import { supabase } from "../../supabase";

export async function signInApi({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}
export async function getSession() {
  const { data: userData, error } = await supabase.auth.getSession();

  if (error) throw new Error(error.message);

  return userData.session.user;
}

export async function getStudent() {
  const userData = await getSession();

  const { id } = userData;

  let { data: Student_table, error } = await supabase
    .from("Profiles")
    .select("*")
    .eq("user_id", id)
    .single();

  if (error) throw new Error(error.message);

  return Student_table;
}

export async function getProfile() {
  const userData = await getSession();

  const { id } = userData;

  let { data: profileData, error: profileError } = await supabase
    .from("Profiles")
    .select("Role")
    .eq("user_id", id)
    .single();

  if (profileError) throw new Error(profileError.message);

  return { profileData };
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);

  return null;
}

export async function createUser({
  email,
  password,

  major,
  semester,
  fullname,
  Role,
}) {
  let updateData;
  if ((email, password)) {
    updateData = {
      email,
      password,

      data: {
        fullname,
      },
    };
  }

  const { data, error } = await supabase.auth.signUp(updateData);

  const { id } = data.user;

  if (error) throw new Error(error.message);

  const { error: studentError } = await supabase
    .from("Profiles")
    .insert([{ user_id: id, major_id: major, semester_id: semester, fullname }])
    .select();

  const { error: profileError } = await supabase
    .from("Profiles")
    .insert([{ Role, user_id: id }])
    .select();

  if (studentError) throw new Error(studentError);

  if (profileError)
    throw new Error("u dont have enough Privilege to perform this action");

  return data;
}
