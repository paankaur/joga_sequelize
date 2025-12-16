const express = require("express");

const app = express();
const PORT = 3026;
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
})();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Sequelize example!" });
});

const articleRouter = require("./routes/article");
app.use("/", articleRouter);
app.use("/articles", articleRouter);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
