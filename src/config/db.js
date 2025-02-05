const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
const colors = require("colors");
const fs = require("fs");

dotenv.config();

const connectDB = async () => {
  try {
    const db = new Sequelize(process.env.DB_URL, {
      dialectOptions : {
        ssl: {
          ca: fs.readFileSync(__dirname + '/../certs/ca.crt')
        }
      }
    });
    await db.authenticate();
    console.log(colors.green("Database connected successfully"));
  } catch (error) {
    console.error(colors.red(`Error connecting to database: ${error.message}`));
    process.exit(1);
  }
};

module.exports = connectDB;
