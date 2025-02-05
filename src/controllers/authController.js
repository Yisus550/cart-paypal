const users = require("../models/userModel");

exports.signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { data, error } = await users.signUp({ email, password });
    if (error) {
      throw new Error(error);
    }

    res.json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { data, error } = await users.signIn({ email, password });
    if (error) {
      throw new Error(error);
    }

    res.json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
