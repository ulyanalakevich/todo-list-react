import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// const activeClassName = "active";
//.attrs(() => ({ activeClassName, }))`
//&.${activeClassName} {}


export const Nav = styled.nav`
background-color: teal;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
`;

export const ListItem = styled.li`
padding: 20px;
list-style: none;
`

export const StyledNavLink = styled(NavLink)`
text-decoration: none;
color: white;
list-style: none;
&.active{
    color: white;
    font-weight: 700;
}
`;