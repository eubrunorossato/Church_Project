import React from "react";
import { Navbar, NavItem, Dropdown, Divider, Icon } from "react-materialize";


const navBar = () => {
  return (
    <Navbar brand={<a />} alignLinks="left">
      <NavItem>
        <Icon>
          favorite
        </Icon>
      </NavItem>
      <NavItem href="">
        Getting started
      </NavItem>
      <NavItem href="components.html">
        Components
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
    </Navbar>
  )
}

export default navBar;
