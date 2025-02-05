const { Router } = require("express");
const { handleCredentials } = require("../handlers/supabase");

const router = Router();

router.get("/credentials", handleCredentials);

module.exports = router;
