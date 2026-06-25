import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nesmzaepinlzfzaxsowk.supabase.co";

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

// https://vckrjzpogekazkvjnuqw.supabase.co/storage/v1/object/sign/avatar/profile.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MDJjOWQzOC0wNGUwLTRmYjgtYTQxMC05MjllZjgzMjY5NDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdmF0YXIvcHJvZmlsZS5qcGciLCJpYXQiOjE3NTc5MTk2MTUsImV4cCI6MTc4OTQ1NTYxNX0.l0tKIVX9WQOk_8trGpex_jEHSa3zTK2QenKVMQYmSm8
