import React from 'react'
import { VscGraph } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
import {BsBoxSeam, BsCartCheck } from "react-icons/bs";
import '../components/styles/dashboard.css'
import {
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
} from "recharts";

const Dashboard = () => {
  const data2 = [
    { name: "Products", total: 5, fill: "#ffdddd" },
    { name: "users", total: 3, fill: "#ecddff" },
    { name: "Orders", total: 7, fill: "#ddfffc" },
  ];

  return (
    <>
      <div className="dashboradContainer">
        <div className="dashboardHeading">
          <span>
            <VscGraph
              style={{
                fontSize: "35px",
                marginRight: "10px",
              }}
            />
            Dashboard
          </span>
        </div>
        <div className="dashboardDetails">
          <div className="dashboardPOU">
            <div className="pou1 dProducts">
              <BsCartCheck style={{ fontSize: "30px", marginTop: "25px" }} />
            </div>
            <div className="pou2">
              <p>Products</p>
              <p>Total: 438</p>
            </div>
          </div>
          <div className="dashboardPOU">
            <div className="pou1 dOrders">
              <BsBoxSeam style={{ fontSize: "30px", marginTop: "25px" }} />
            </div>
            <div className="pou2">
              <p>Orders</p>
              <p>Total: 349</p>
            </div>
          </div>
          <div className="dashboardPOU">
            <div className="pou1 dUser">
              <FiUsers style={{ fontSize: "30px", marginTop: "25px" }} />
            </div>
            <div className="pou2">
              <p>Users</p>
              <p>Total: 200</p>
            </div>
          </div>
        </div>
        <div className="dashboardChat">
          <div className="barGraphTags">
            <div className="barGraphIndicators">
              <div
                className="indicator"
                style={{ backgroundColor: "#ffdddd" }}
              ></div>
              <div>Products</div>
            </div>
            <div className="barGraphIndicators">
              <div
                className="indicator"
                style={{ backgroundColor: "#ecddff" }}
              ></div>
              <div>Orders</div>
            </div>
            <div className="barGraphIndicators">
              <div
                className="indicator"
                style={{ backgroundColor: "#ddfffc" }}
              ></div>
              <div>Users</div>
            </div>
          </div>
          <div className="bargraph">
            <ResponsiveContainer height={400} width={500}>
              <BarChart
                width={400}
                height={300}
                data={data2}
                margin={{ left: 10 }}
                barSize={30}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="total"
                  fill="#000"
                  background={{ fill: "#fff" }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard
