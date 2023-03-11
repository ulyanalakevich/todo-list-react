import styled, { css } from "styled-components"

export const Content = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    margin: 0;
    padding: 0 10px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    padding: 10px;
`;

export const Button = styled.button`
    border: 1px solid #ddd;
    padding: 10px;
    background-color: teal;
    color: white;
    height: 40px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
    background-color: hsl(180, 100%, 35%);
    transform: scale(1.07);
    }

    &:active {
    background-color: hsl(180, 100%, 45%);
    }
`;