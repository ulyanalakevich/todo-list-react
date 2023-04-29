import { ListItem, Nav, StyledNavLink } from "./styled";

export const Navigation = () => {
  return (
    <Nav>
      <ListItem>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </ListItem>
      <ListItem>
        <StyledNavLink to="/author">O autorze</StyledNavLink>
      </ListItem>
    </Nav>
  );
};
