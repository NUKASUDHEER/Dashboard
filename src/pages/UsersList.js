import React from 'react'
import "../components/styles/tables.css";
import { BsPencilFill, BsTrash } from "react-icons/bs";

const UsersList = () => {
  return (
    <>
      <div className="tableContainer">
        <div className="table-box">
          <h1>ALL USERS</h1>
          <table>
            <tbody>
              <tr>
                <th>User ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>21352151</td>
                <td>nuka123@gmail.com</td>
                <td>sudheer</td>
                <td>user</td>
                <td>
                  <span className="tableIcons">
                    <a href="/admin/user/:id" className="iconLink">
                      <BsPencilFill />
                    </a>
                  </span>
                  <span className="tableIcons">
                    <BsTrash />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UsersList
