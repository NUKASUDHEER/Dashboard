import React from "react";
import "../components/styles/tables.css";
import { BsPencilFill, BsTrash } from "react-icons/bs";

const OrderList = () => {
  return (
    <>
      <div className="tableContainer">
        <div className="table-box">
          <h1>ALL ORDERS</h1>
          <table>
            <tbody>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Item Qty</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>21352151</td>
                <td>Processed</td>
                <td>5</td>
                <td>25000</td>
                <td>
                  <span className="tableIcons">
                    <a href="/admin/order/:id" className="iconLink">
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
};

export default OrderList;
