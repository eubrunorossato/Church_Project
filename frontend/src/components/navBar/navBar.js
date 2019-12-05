import React from "react";
import { Navbar, NavItem, Dropdown, Divider, Icon } from "react-materialize";
import DropDownButton from "../dropDown/dropDowButton";

const navBar = () => {
  return (
    <Navbar brand={<a />} alignLinks="left">
      <NavItem>
        <Icon>
          home
        </Icon>
      </NavItem>
      <DropDownButton />
      <NavItem href="components.html">
        Membros
      </NavItem>
      <Dropdown trigger={<a />}>
        <a href="#">
          one
        </a>
        <a href="#">
          two
        </a>
        <Divider />
        <a href="#">
          three
        </a>
      </Dropdown>
    </Navbar >
  )
}

export default navBar;
