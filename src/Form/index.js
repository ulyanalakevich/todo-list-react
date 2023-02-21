import React, { useState } from 'react';
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                type="text"
                className="form__item newTask js-newTask"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                autofocus />
            <button className="form__item form__item--button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;