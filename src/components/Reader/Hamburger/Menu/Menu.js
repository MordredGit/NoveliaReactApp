// Menu.js
import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        Chapter 1
      </a>
      <a href="/">
        Chapter 2
      </a>
      <a href="/">
        Chapter 3
      </a>
      <a href="/">
        Chapter 4
      </a>
      <a href="/">
        Chapter 5
      </a>
      <a href="/">
        Chapter 6
      </a>
      <a href="/">
        Chapter 7
      </a>
      <a href="/">
        Chapter 8
      </a>
      <a href="/">
        Chapter 9
      </a>
      <a href="/">
        Chapter 10
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
