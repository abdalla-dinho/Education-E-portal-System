import { supabase, supabaseUrl } from "../../supabase";

export async function updatePassword({ password }) {
  const { data, error } = await supabase.auth.updateUser({
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function updateAccount({ fullname, avatar }) {
  let updateData;

  if (fullname) {
    updateData = {
      data: {
        fullname,
      },
    };
  }

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error("Could not update the account creditials");

  if (!avatar) return data;

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatar")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  const { data: updateUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatar/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);

  return updateUser;
}
