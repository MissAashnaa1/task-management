import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { appendTasksData } from "../redux/counter";
// import { useLocation, useNavigate } from "react-router-dom";
// import { CreateNewTodo } from "../services/todoService";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const CreateTask = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const { email } = location.state;
  // const [task, setTodo] = useState({
  //   title: "",
  //   description: "",
  //   status: false,
  // });
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      toast.error("Fields can not be empty.");
      setTitle(title.trim());
      setDescription(description.trim());

      return;
    }
    const task = {
      id: Date.now(),
      title,
      description,
      status: false,
    };

    console.log(task);

    try {
      let res = await axios.post("http://localhost:5000/api/create-task", task);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    // send to backend
    dispatch(appendTasksData(task));
    toast.success("Task created.");

    // if (todo.priority === null) {
    //   toast.warning("Please select a priority option.");
    //   return;
    // }
    // try {
    //   await CreateNewTodo(todo);
    //   navigate(`/home`, { state: { email } });
    // } catch (error) {
    //   if (error.response && error.response.data && error.response.data.errors) {
    //     const {errors} = error.response.data;
    //     Object.keys(errors).forEach((key) => {
    //       toast.error(errors[key]);
    //     });
    //   }
    // }
    setTitle("");
    setDescription("");
  };

  return (
    <div className="container">
      <div className="fw-bold fs-2 text-center m-4 ">Create Task</div>
      <form className="w-50 m-auto" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control outline-input"
            id="title"
            name="title"
            value={title}
            placeholder="Enter title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            className="form-control outline-input"
            id="description"
            name="description"
            value={description}
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Create Task
          </button>
        </div>
      </form>
      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default CreateTask;
