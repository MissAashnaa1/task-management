import React, { useEffect } from "react";
import { Box, Button, WrapItem, Checkbox } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setDltId } from "../redux/counter";

import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(false);

  // apko akele thodi krne dungi apna kam
  // pure lelena
  //apko ni arhi na?han yh krdo bnd dadaji k phn k net udadungi fr dantenge
  // vo to formik se kyanhi krte sth hi backend b to krna aj submit krna

  // >> date: 02Aug

  // edit task ka backend bnne ke bd hoga ache se. 
  // edit icon pr click krenge to us specific task ki if func se pass hogi aur us id ka title and desc form me aayega
  // vha se update apii call krni pdegi. 


  useEffect(() => {
    setChecked(task.status);
  }, [task.status]);

  const handleDelete = (id) => {
    dispatch(setDltId(id));
  };

  return (
    <div
      id={task.id}
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
          // defaultChecked
          size={"lg"}
          isChecked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
        <WrapItem>
          <Button
            onClick={() => {
              handleDelete(task.id);
            }}
            colorScheme="red"
          >
            <DeleteIcon />
          </Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="blue">
            <EditIcon />
          </Button>
        </WrapItem>
      </Box>
    </div>
  );
};

export default TaskItem;
