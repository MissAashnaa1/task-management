import React, { useEffect } from "react";
import { Box, Button, WrapItem, Checkbox } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  setDltId,
  setIsUpdate,
  setShowTastList,
  setUpdateID,
} from "../redux/counter";

import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import axios from "axios";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(false);
  const { showTaskList } = useSelector((state) => state.counter);

  useEffect(() => {
    setChecked(task.status);
  }, [task.status]);

  const handleDelete = async (id) => {
    dispatch(setDltId(id));
    console.log(id, "adsfasdff");

    try {
      let res = await axios.delete(
        `http://localhost:5000/api/delete-task/${id}`
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (id) => {
    // dispatch(setDltId(id));
    console.log(id, "edit");
    dispatch(setUpdateID(id));
    dispatch(setIsUpdate(true));
    dispatch(setShowTastList(!showTaskList));

    try {
      let res = await axios.get(`http://localhost:5000/api/delete-task/${id}`);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id, status) => {
    try {
      let res = await axios.put(`http://localhost:5000/api/set-status/`, {
        id: id,
        status: status,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      id={task._id}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        marginBottom: "2em",
        padding: "1em",
        backgroundColor: "#d697ff",
        boxSizing: "border-box",
        borderRadius: "1em",
      }}
    >
      <div>
        <p className={checked ? "lineThrough" : ""}>
          <span>Title:</span> {task.title}
        </p>
        <p>
          <span>Description:</span> {task.description}
        </p>
        <p>
          <span>Status:</span> {checked ? "Completed" : "Incomplete"}
        </p>
      </div>
      <Box display="flex" alignItems="center" justifyContent="center" gap="4">
        <Checkbox
          size={"lg"}
          isChecked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
            handleStatus(task._id, e.target.checked);
          }}
        />
        <WrapItem>
          <Button
            onClick={() => {
              handleDelete(task._id);
            }}
            colorScheme="red"
          >
            <DeleteIcon />
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            onClick={() => {
              handleEdit(task._id);
            }}
            colorScheme="blue"
          >
            <EditIcon />
          </Button>
        </WrapItem>
      </Box>
    </div>
  );
};

export default TaskItem;
