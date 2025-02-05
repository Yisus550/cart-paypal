const supabase = require("../config/supabase");

exports.signUp = async ({ email, password }) => {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      throw new Error(error);
    }
    return data;
  } catch (error) {
    console.error(error.stack);
  }
};

exports.signIn = async ({ email, password }) => {
  try {
    const { data, error } = await supabase.auth.signIn({ email, password });
    if (error) {
      throw new Error(error);
    }
    return data;
  } catch (error) {
    console.error(error.stack);
  }
};
