import React from "react";
import { BsPencilFill, BsTrash } from "react-icons/bs";
import "../components/styles/tables.css"

const ProductList = () => {
  return (
    <>
      <div className="tableContainer">
        <div className="table-box">
          <h1>ALL PRODUCTS</h1>
          <table>
            <tbody>
              <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>21352151</td>
                <td>sudheer</td>
                <td>5</td>
                <td>25000</td>
                <td>
                  <span className="tableIcons">
                    <a href="/admin/product/:id">
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

export default ProductList;
