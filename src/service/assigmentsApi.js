import { supabase } from "../../supabase";

export async function addAssigment(assigment) {
  const { data, error } = await supabase
    .from("Assigments")
    .insert([assigment])
    .select();

  if (error)
    throw new Error("u dont have enough Privilege  to perform this action");

  return data;
}
