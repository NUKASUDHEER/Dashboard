import React from 'react'
import '../components/styles/processOrder.css'
import { BsClipboardCheck } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";

const ProcessOrder = () => {
  return (
    <>
      <div className="shippingDetails">
        <span>
          <FaShippingFast
            style={{
              fontSize: "35px",
              marginRight: "10px",
            }}
          />
          Shipping Info
        </span>
      </div>
      <div className="processOrderContainer">
        <div className="shipingInfo">
          <div className="processHeading">
            <h3>Delivery Address</h3>
            <p className="details">Name: nuka</p>
            <p className="details">Phone: 309285239085</p>
            <p className="details">Address: srikakulam, kotabommali,532195</p>
          </div>
          <div className="processHeading">
            <h3>Payment</h3>
            <p className="details" style={{ color: "green" }}>
              PAID
            </p>
            <p className="details">Amount: 23515</p>
          </div>
          <div className="processHeading">
            <h3>Order Status</h3>
            <p className="details" style={{ color: "red" }}>
              Shipped
            </p>
          </div>
          <div className="processHeading">
            <h3>Your Cart Items:</h3>
            <div className="allOrderedProducts">
              <img src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8&w=1000&q=80" />
              <p className="details">
                Apple MacBook(8Gb RAM,256GB SSD,33.78cm) 2 X 16000 = 32000
              </p>
            </div>
          </div>
        </div>
        {/* <div className="splitTwoDivsLine"></div> */}
        <div className="processOrder">
          <div className="processOrderForm">
            <form>
              <h2>Process Order</h2>
              <div>
                <span>
                  <BsClipboardCheck />
                </span>
                <select>
                  <option value="delivered">Delivered</option>
                  <option value="processed">Processed</option>
                </select>
              </div>
              <button type="submit">Process</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProcessOrder
