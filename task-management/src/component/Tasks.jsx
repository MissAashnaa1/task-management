import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import axios from "axios";

// (title, description, status)
// const tasksData = [
//   {
//     id: 1,
//     title: "Abc",
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
//     status: true,
//   },
//   {
//     id: 2,
//     title: "Abc",
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
//     status: true,
//   },
//   {
//     id: 3,
//     title: "Abc",
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
//     status: true,
//   },
//   {
//     id: 4,
//     title: "Abc",
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
//     status: true,
//   },
//   {
//     id: 5,
//     title: "Abc",
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
//     status: true,
//   },
//   {
//     id: 6,
//     title: "Abc",
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
//     status: true,
//   },
// ];
const Tasks = () => {
  const { dltID, tasksData } = useSelector((state) => state.counter);
  const [tasks, setTasks] = useState(tasksData);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      let res = await axios.get("http://localhost:5000/api/get-tasks");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (dltID) {
      handleDelete(dltID);
    }
  }, [dltID]);

  const handleDelete = (id) => {
    console.log(id, "handle dlt");
    setTasks(tasks.filter((tasks) => tasks.id !== id));
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </div>
  );
};

export default Tasks;
