import React from "react";
import { Navbar, NavItem, Dropdown, Divider, Icon } from "react-materialize";


const navBar = () => {
  return (
    <Navbar brand={<a />} alignLinks="left">
      <NavItem>
        <Icon>
          home
        </Icon>
      </NavItem>
      <NavItem href="">
        Relatórios Semanais
      </NavItem>
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
    </Navbar>
  )
}

export default navBar;
