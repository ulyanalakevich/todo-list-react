import React, { useState } from 'react';
import { Content, Input, Button } from "./styled.js";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }
        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    }
    return (
        <Content onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                autoFocus />
            <Button>Dodaj zadanie</Button>
        </Content>
    );
};

export default Form;