import React from "react";
import TaskItem from "./TaskItem";

// (title, description, status)

const Tasks = () => {
  const tasks = [
    {
        id:1,
        title:"Abc",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
        status:true
    },
    {
        id:2,
        title:"Abc",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
        status:true
    },
    {
        id:3,
        title:"Abc",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
        status:true
    },
    {
        id:4,
        title:"Abc",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
        status:true
    },
    {
        id:4,
        title:"Abc",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
        status:true
    },
    {
        id:4,
        title:"Abc",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
        status:true
    },
  ]
  return (
    <div style={{display:"flex",alignItems:"center", flexDirection:"column"}}>
        {
            tasks.map(task=>{
                return(
                    <TaskItem key={task.id} task={task} />
                )
            })
        }
    </div>
  )
}

export default Tasks;
