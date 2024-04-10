import React from "react";
import userreview from "../Assets/dashboard/userreview.svg";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-10 justify-start">
        <Link to="/Lawyers">
          <div className="w-[350px] pb-2 shadow-lg">
            <div className="text-2xl font-medium mt-5 ml-5">Total Lawyers</div>
            <hr />
            <span className="flex justify-center text-4xl font-semibold mt-2">
              24
            </span>
            <div className="flex justify-between ml-2 mr-2 mt-14">
              <div>
                <span className="bg-[#E6EEFF] rounded-2xl p-1 mr-1">14 </span>
                old lawyers
              </div>
              <div>
                <span className="bg-[#E6EEFF] rounded-2xl p-1 mr-1">14 </span>{" "}
                New lawyers
              </div>
            </div>
          </div>
        </Link>
        <Link to="/totalusers">
          <div className="w-[350px] pb-2 shadow-lg">
            <div className="text-2xl font-medium mt-5 ml-5">Total Users</div>
            <hr />
            <span className="flex justify-center text-4xl font-semibold mt-2">
              24
            </span>
            <div className="flex justify-between ml-2 mr-2 mt-14">
              <div>
                <span className="bg-[#E6EEFF] rounded-2xl p-1 mr-1">14 </span>
                old lawyers
              </div>
              <div>
                <span className="bg-[#E6EEFF] rounded-2xl p-1 mr-1">14 </span>{" "}
                New lawyers
              </div>
            </div>
          </div>
        </Link>
        <Link to="/Booking">
          <div className="w-[350px] pb-2 shadow-lg">
            <div className="text-2xl font-medium mt-5 ml-5">Total Bookings</div>
            <hr />
            <span className="flex justify-center text-4xl font-semibold mt-2">
              24
            </span>
            <div className="flex justify-between ml-2 mr-2 mt-14">
              <div>
                <span className="bg-[#E6EEFF] rounded-2xl p-1 mr-1">14 </span>
                old lawyers
              </div>
              <div>
                <span className="bg-[#E6EEFF] rounded-2xl p-1 mr-1">14 </span>{" "}
                New lawyers
              </div>
            </div>
          </div>
        </Link>
        <Link to="/cases">
          <div className="w-[350px] pb-2 shadow-lg">
            <div className="text-2xl font-medium mt-5 ml-5">Total Cases</div>
            <hr />
            <span className="flex justify-center text-4xl font-semibold mt-2">
              24
            </span>
            <div className="flex justify-between ml-2 mr-2 mt-14">
              <div>
                <span className="bg-[#E6EEFF] rounded-2xl p-1 mr-1">14 </span>
                old lawyers
              </div>
              <div>
                <span className="bg-[#E6EEFF] rounded-2xl p-1 mr-1">14 </span>{" "}
                New lawyers
              </div>
            </div>
          </div>
        </Link>
        <Link to="/services">
          <div className="w-[350px] pb-2 shadow-lg">
            <div className="text-2xl font-medium mt-5 ml-5">Total Services</div>
            <hr />
            <span className="flex justify-center text-4xl font-semibold mt-2">
              24
            </span>
            <div className="flex justify-between ml-2 mr-2 mt-14">
              <div>
                <span className="bg-[#E6EEFF] rounded-2xl p-1 mr-1">14 </span>
                old lawyers
              </div>
              <div>
                <span className="bg-[#E6EEFF] rounded-2xl p-1 mr-1">14 </span>{" "}
                New lawyers
              </div>
            </div>
          </div>
        </Link>
        <Link to="/department">
          <div className="w-[350px] pb-2 shadow-lg">
            <div className="text-2xl font-medium mt-5 ml-5">
              Total Departments
            </div>
            <hr />
            <span className="flex justify-center text-4xl font-semibold mt-2">
              24
            </span>
            <div className="flex justify-between ml-2 mr-2 mt-14">
              <div>
                <span className="bg-[#E6EEFF] rounded-2xl p-1 mr-1">14 </span>
                old lawyers
              </div>
              <div>
                <span className="bg-[#E6EEFF] rounded-2xl p-1 mr-1">14 </span>{" "}
                New lawyers
              </div>
            </div>
          </div>
        </Link>
        <Link to="/Complaint">
          <div className="w-[350px] pb-2 shadow-lg">
            <div className="text-2xl font-medium mt-5 ml-5">
              Total Complaints
            </div>
            <hr />
            <span className="flex justify-center text-4xl font-semibold mt-2">
              24
            </span>
            <div className="flex justify-between ml-2 mr-2 mt-14">
              <div>
                <span className="bg-[#E6EEFF] rounded-2xl p-1 mr-1">14 </span>
                old lawyers
              </div>
              <div>
                <span className="bg-[#E6EEFF] rounded-2xl p-1 mr-1">14 </span>{" "}
                New lawyers
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="ml-10 mt-5">
        <div className="text-2xl font-medium">Reviews</div>
        <div className="flex gap-10">
          <div className="w-[350px] h-[220px] shadow-lg">
            <div className="flex gap-2 ml-5 mt-5">
              <img src={userreview} alt="" className="w-[50px]" />
              <div className="flex flex-col justify-start">
                <div>sujan</div>
                <div>Realesta</div>
                <div className="flex">
                  <IoIosStar style={{ color: "#FFB800" }} />{" "}
                  <IoIosStar style={{ color: "#FFB800" }} />{" "}
                  <IoIosStar style={{ color: "#FFB800" }} />{" "}
                  <IoIosStar style={{ color: "#FFB800" }} />{" "}
                  <IoIosStar style={{ color: "#FFB800" }} />
                </div>
              </div>
            </div>

            <span className="flex justify-center m-3">
              Lorem ipsum dolor sit amet consectetur. Quisque lobortis et morbi
              elit nunc enim. Sit felis risus est purus vulputate massa mi.
              Lectus dui nullam nullam eget justo senectus sed. Morbi in mollis
              urna pharetra vitae
            </span>
          </div>
          <div className="w-[350px] h-[220px] shadow-lg">
            <div className="flex gap-2 ml-5 mt-5">
              <img src={userreview} alt="" className="w-[50px]" />
              <div className="flex flex-col justify-start">
                <div>sujan</div>
                <div>Realesta</div>
                <div className="flex">
                  <IoIosStar style={{ color: "#FFB800" }} />{" "}
                  <IoIosStar style={{ color: "#FFB800" }} />{" "}
                  <IoIosStar style={{ color: "#FFB800" }} />{" "}
                  <IoIosStar style={{ color: "#FFB800" }} />{" "}
                  <IoIosStar style={{ color: "#FFB800" }} />
                </div>
              </div>
            </div>

            <span className="flex justify-center m-3">
              Lorem ipsum dolor sit amet consectetur. Quisque lobortis et morbi
              elit nunc enim. Sit felis risus est purus vulputate massa mi.
              Lectus dui nullam nullam eget justo senectus sed. Morbi in mollis
              urna pharetra vitae
            </span>
          </div>
          <div className="w-[350px] h-[220px] shadow-lg">
            <div className="flex gap-2 ml-5 mt-5">
              <img src={userreview} alt="" className="w-[50px]" />
              <div className="flex flex-col justify-start">
                <div>sujan</div>
                <div>Realesta</div>
                <div className="flex">
                  <IoIosStar style={{ color: "#FFB800" }} />{" "}
                  <IoIosStar style={{ color: "#FFB800" }} />{" "}
                  <IoIosStar style={{ color: "#FFB800" }} />{" "}
                  <IoIosStar style={{ color: "#FFB800" }} />{" "}
                  <IoIosStar style={{ color: "#FFB800" }} />
                </div>
              </div>
            </div>

            <span className="flex justify-center m-3">
              Lorem ipsum dolor sit amet consectetur. Quisque lobortis et morbi
              elit nunc enim. Sit felis risus est purus vulputate massa mi.
              Lectus dui nullam nullam eget justo senectus sed. Morbi in mollis
              urna pharetra vitae
            </span>
          </div>
        </div>
      </div>
      <div className="ml-10 mt-5">
        <div className="flex justify-between">
          <div className="text-2xl font-medium">Latest Transactions</div>

          <div>
            <select className="bg-[#0F2C64] text-white w-[180px] h-[50px] rounded-2xl pl-1">
              <option>All Transactions</option>
              <option value="sms">Trough Sms</option>
              <option value="Email">Email</option>
              <option value="App">App Notification</option>
              <option value="Alert">Notification Alert</option>
            </select>
          </div>
        </div>
        <div className="shadow-lg mb-[200px] mt-5 p-5">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-[200px] text-left text-[#6D6D6D]">Name</th>
                <th className="text-left text-[#6D6D6D] w-[200px]">Case ID</th>
                <th className="w-[200px] text-left text-[#6D6D6D]">Date</th>
                <th className=" w-[200px] text-left text-[#6D6D6D]">
                  Occupation
                </th>

                <th className="w-[200px] text-center text-[#6D6D6D]">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left">y832829</td>
                <td className="w-[200px] text-left">AC Repair Service</td>

                <td className="w-[50px] text-left">Rs.650</td>
                <td className="w-[50px] text-left">Trader</td>
                <td className="w-[50px] text-center text-[#26A843]">+₹9000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
