const { Router } = require("express");

const router = Router();

router.get("/credentials", async (req, res) => {
  res.json({ supabase });
});

module.exports = router;
