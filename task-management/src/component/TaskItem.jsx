import { Box, Button, WrapItem } from "@chakra-ui/react";
import React from "react";

import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const TaskItem = ({ task }) => {
  // apko akele thodi krne dungi apna kam
  // pure lelena
  //apko ni arhi na?han yh krdo bnd dadaji k phn k net udadungi fr dantenge
  // vo to formik se kyanhi krte sth hi backend b to krna aj submit krna
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
        <p>
          <span>Title:</span> {task.title}
        </p>
        <p>
          <span>Description:</span> {task.description}
        </p>
      </div>
      <Box display="flex" alignItems="center" justifyContent="center" gap="4">
        <WrapItem>
          <Button colorScheme="red">
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
