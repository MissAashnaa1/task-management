const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const createTaskRoute = require("./routes/createTaskRoute");
const getAllTasks = require("./routes/getAllTasksRoute");
const updateTaskRoute = require("./routes/updateTaskRoute");
const deleteTaskRoute = require("./routes/deleteTaskRoute");
const setStatusRoute = require("./routes/setStatusRoute");
const singleTastRroute = require("./routes/singleTaskRoute");

const app = express();
dotenv.config();

connectDB();

app.use(express.json());

const cors = require("cors");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("get request");
});

app.use("/api/get-tasks", getAllTasks);
app.use("/api/create-task", createTaskRoute);
app.use("/api/update-task/", updateTaskRoute);
app.use("/api/delete-task/", deleteTaskRoute);
app.use("/api/set-status", setStatusRoute);
app.use("/api/task/", singleTastRroute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (!err) console.log(`server running on ${PORT}`);
  else console.log("err occured", err);
});
