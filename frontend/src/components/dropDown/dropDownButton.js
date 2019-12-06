import React from "react";
import { Dropdown, Icon } from "react-materialize";
import "./dropDownButton.scss";

const dropDownButton = () => {
  return (
    <Dropdown
      options={{
        alignment: 'left',
        autoTrigger: true,
        closeOnClick: false,
        constrainWidth: true,
        container: true,
        coverTrigger: false,
        hover: true,
        inDuration: 150,
        outDuration: 250
      }}
      trigger={<a>Relatorios Semanais</a>}>
      <a href="#">
        <Icon>
          attachment
        </Icon>
        Ver
      </a>
      <a href="#">
        <Icon>
          control_point
        </Icon>
        Criar
      </a>
    </Dropdown>
  )
}

export default dropDownButton;
