import styled, { css } from "styled-components"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const List = styled.ul`
  margin: 0;
  padding: 10px;
  font-weight: 400px;
`;

export const Item = styled.li`
 display: grid;
 grid-template-columns: auto 1fr auto;
 align-items: center;
 padding: 10px;
 border-bottom: 1px solid #ddd;
 grid-gap: 20px;

 ${({ hidden }) => hidden && css`
 display: none;
 `}
`;

export const Content = styled.span`
${({ done }) => done && css`
text-decoration: line-through;
    `}
`

export const Button = styled.button`
    color: white;
    width: 35px;
    height: 35px;
    border: none;
    transition: 0.5s;
    cursor: pointer;

    ${({ toggleDone }) => toggleDone && css`
    background-color: green;

        &:hover {
        background-color: hsl(120, 100%, 30%);
        transform: scale(1.02);
        }

        &:active {
        background-color: hsl(120, 100%, 35%);
        }
    `}

    ${({ remove }) => remove && css`
       background-color: red;

       &:hover {
        background-color: hsl(0, 100%, 58%);
        transform: scale(1.02);
       }

       &:active {
        background-color: hsl(0, 100%, 63%);
       }
    `}
`

export const StyledLink = styled(Link)`
text-decoration: none;
color: teal;
&:hover {
        color: hsl(180, 100%, 35%);
    }
`