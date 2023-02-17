import React from 'react';
import "./style.css";

const Form = () => (
    <form className="form">
        <input type="text" className="form__item newTask js-newTask" placeholder="Co jest do zrobienia?" autofocus />
        <button className="form__item form__item--button">Dodaj zadanie</button>
    </form>
);

export default Form;