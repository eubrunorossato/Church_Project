import React from "react";
import { Table } from "react-materialize";
import "./memberList.scss"

const userList = () => {
  return (
    <div className="container">
      <Table className="memberList" striped="true">
        <thead>
          <tr>
            <th data-field="id">
              Membros
            </th>
            <th data-field="name">
              Faltas
            </th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
    </div>
  )
}

export default userList;
