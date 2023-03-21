import React, { useEffect, useState } from "react";
import { ToDoList } from "../components/ToDoList";

export default function ToDoListLearn() {
  const [toDoList, setToDoList] = useState(() => {
    const list = localStorage.getItem("To_Do_App");
    if (list) {
      return JSON.parse(list);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("To_Do_App", JSON.stringify(toDoList));
  }, [toDoList]);

  const onAdd = (name) => {
    const task = {
      id: Date.now(),
      name,
      isCompleted: false,
    };
    const checkDoubleName = toDoList.some((e) => e.name === name);
    if (checkDoubleName) {
      alert("Tên nhiệm vụ đã tồn tại!");
      return;
    }
    setToDoList([...toDoList, task]);
  };

  const onCompleted = (id) => {
    const task = toDoList.find((e) => e.id === id);
    if (task) {
      task.isCompleted = true;
      setToDoList([...toDoList]);
    }
  };

  const onDelete = (id) => {
    const task = toDoList.filter((e) => e.id !== id);
    if (task) {
      setToDoList(task);
    }
  };

  const onEdited = (id, valueEdit) => {
    const task = toDoList.find((e) => e.id === id);
    if (task) {
      task.name = valueEdit;
      setToDoList([...toDoList]);
    }
  };
  return (
    <div>
      <ToDoList
        toDoList={toDoList}
        onAdd={onAdd}
        onCompleted={onCompleted}
        onDelete={onDelete}
        onEdited={onEdited}
      />
    </div>
  );
}
