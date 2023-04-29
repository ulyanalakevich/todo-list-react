import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Content, Button } from "./styled.js";
import { addTask } from "../../tasksSlice.js";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../../Input/index.js";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(
      addTask({
        content: trimmedNewTaskContent,
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <Content onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        autoFocus
      />
      <Button onClick={() => inputRef.current.focus()}>Dodaj zadanie</Button>
    </Content>
  );
};

export default Form;
