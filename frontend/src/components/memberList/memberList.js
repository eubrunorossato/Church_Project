import React from "react";
import { Table, CardPanel } from "react-materialize";
import "./memberList.scss"

const userList = () => {
  return (
    <div className="container">
      <CardPanel className="card-panel">
        <Table striped="true">
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
      </CardPanel>
    </div>
  )
}

export default userList;
