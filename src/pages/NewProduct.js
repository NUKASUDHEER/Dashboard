import React from 'react'
import "../components/styles/dashBoardForms.css"
import {
  BsReceipt,
  BsCurrencyDollar,
  BsJournalText,
  BsUiChecks,
  BsBarChartLine,
} from "react-icons/bs";


const NewProduct = () => {
  return (
    <>
        <div className="formContainer">
          <div className="form-box">
            <h1>ADD PRODUCT</h1>
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
                    <BsJournalText />
                  </span>
                  <input type="text" placeholder="product discription" />
                </div>
                <div className="input-field">
                  <span>
                    <BsUiChecks />
                  </span>
                  <input type="text" placeholder="category" />
                </div>
                <div className="input-field">
                  <span>
                    <BsBarChartLine />
                  </span>
                  <input type="number" placeholder="stock" />
                </div>
                <div>
                  <input
                    style={{ marginTop: "5%" }}
                    type="file"
                    placeholder="upload file"
                  />
                </div>
              </div>
              <div className="btn-field">
                <button type="button">ADD PRODUCT</button>
              </div>
            </form>
          </div>
        </div>
    </>
  );
}

export default NewProduct
