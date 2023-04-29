import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background-color: transparent;
  color: teal;
  border: none;
  margin: 0 0 0 20px;
  transition: color 0.3s;
  cursor: pointer;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 0px;
    justify-content: center;
    padding-bottom: 20px;
  }

  &:hover {
    color: hsl(180, 100%, 35%);
  }

  &:disabled {
    color: #ccc;
  }
`;
