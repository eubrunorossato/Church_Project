import React from "react";
import { Button, Dropdown, Icon, Divider } from "react-materialize";

const dropDownButton = () => {
  return (
    <Dropdown
      options={{
        alignment: 'left',
        autoTrigger: true,
        closeOnClick: true,
        constrainWidth: true,
        container: true,
        coverTrigger: false,
        hover: true,
        inDuration: 150,
        outDuration: 250
      }}
      trigger={<a>Relatorios Semanais</a>}>
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
      <a href="#">
        <Icon>
          view_module
            </Icon>
        four
          </a>
      <a href="#">
        <Icon>
          cloud
            </Icon>
        {' '}five
          </a>
    </Dropdown>
  )
}

export default dropDownButton;
