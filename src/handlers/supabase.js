const supabase = require("../config/supabase");

exports.handleCredentials = async (req, res) => {
  try {
    res.json({ supabase });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
