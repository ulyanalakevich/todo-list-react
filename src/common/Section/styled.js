import styled from "styled-components";

export const Content = styled.section`
  margin: 20px 0;
  background-color: white;
`;

export const List = styled.div`
  border-bottom: 3px solid #ddd;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 0;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Header = styled.h2`
  padding: 20px;
  margin: 0;
  font-weight: 700;
`;

export const Tasks = styled.div`
  margin: 0;
  padding: 20px;
`;
