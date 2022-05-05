import React from "react";
import { Container } from "./styles/Container.styled";
import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div className="header__wrapper">
          <img src="media/gtd_logo.png" alt="gtd" />
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
