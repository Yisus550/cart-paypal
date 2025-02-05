const server = require("./server");
const colors = require("colors");

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(colors.cyan.bold(`Server running on http://localhost:${PORT}`));
});
