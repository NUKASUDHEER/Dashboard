import React, { useState } from "react";
import "../components/styles/dashBoardForms.css";
import {
  BsPersonFill,
  BsFillEnvelopeFill,
  BsFillPersonCheckFill,
} from "react-icons/bs";

const UpdateUser = () => {
  const [role, setRole] = useState("");

  return (
    <>
      <div className="formContainer">
        <div className="form-box">
          <h1>EDIT USER</h1>
          <form>
            <div className="input-group">
              <div className="input-field">
                <span>
                  <BsPersonFill />
                </span>
                <input type="text" placeholder="user name" />
              </div>
              <div className="input-field">
                <span>
                  <BsFillEnvelopeFill />
                </span>
                <input type="email" placeholder="email" />
              </div>
              <div className="input-field selectOptionDiv">
                <span>
                  <BsFillPersonCheckFill />
                </span>
                <select
                  className="selectOption"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="none">Select</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <div className="btn-field">
              <button type="button">UPDATE</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
