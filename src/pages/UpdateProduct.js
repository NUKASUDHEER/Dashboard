import React from 'react'
import "../components/styles/dashBoardForms.css";
import {
  BsReceipt,
  BsCurrencyDollar,
  BsBarChartLine,
} from "react-icons/bs";


const UpdateProduct = () => {
  return (
    <>
      <div className="formContainer">
        <div className="form-box">
          <h1>EDIT PRODUCT</h1>
          <form>
            <div className="input-group">
              <div className="input-field">
                <span>
                  <BsReceipt />
                </span>
                <input type="text" placeholder="product name" />
              </div>
              <div className="input-field">
                <span>
                  <BsCurrencyDollar />
                </span>
                <input type="number" placeholder="price" />
              </div>
              <div className="input-field">
                <span>
                  <BsBarChartLine />
                </span>
                <input type="number" placeholder="stock" />
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
}

export default UpdateProduct
