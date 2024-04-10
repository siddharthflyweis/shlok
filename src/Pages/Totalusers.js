import { FaSearch } from "react-icons/fa";
import dltbtn from "../Assets/dltbtn.svg";
import edit from "../Assets/edit.svg";
import userimage from "..//Assets/userimage.svg";
import { Baseurl } from "../utlis/apiservices";
import axios from "axios";
import config from "../utlis/config";
import { useEffect, useState } from "react";

import Spinner from "../utlis/Spinner";
import { useNavigate } from "react-router-dom";
const Totalusers = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
const navigate =useNavigate()
  function fetchuser() {
    axios
      .get(`${Baseurl}/api/v1/admin/users`, {
        headers: {
          Authorization: config.token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    fetchuser();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  //////////delete lawyer/////////
  function handledelete(_id) {
    const confirm = window.confirm("do you want to delete ?");
    if (confirm) {
      axios
        .delete(`${Baseurl}/api/v1/admin/User/${_id}`, {
          headers: {
            Authorization: config.token,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          alert("record had deleted");
          window.location.reload();
          navigate("/totalusers");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate("/totalusers");
    }
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="flex justify-between">
            <div className="text-3xl font-semibold">ALL Users</div>
            <div>
              <div className="flex justify-center items-center gap-5">
                <div className="relative mt-2 rounded-md">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="bg-[#0F2C64] p-2.5  ml-[-3px] rounded-l-full text-white">
                      <FaSearch />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="placeholder: ml-2 block w-[250px] rounded-3xl border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search User"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 mb-[200px] mt-5 p-5">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-[100px] text-left text-[#6D6D6D]"></th>
                  <th className="w-[200px] text-left text-[#6D6D6D]">
                    Lawyer Name
                  </th>
                  <th className="text-left text-[#6D6D6D] w-[250px]">Email</th>
                  <th className="w-[200px] text-left text-[#6D6D6D]">
                    Phone no.
                  </th>
                  <th className=" w-[200px] text-center text-[#6D6D6D]">
                    Total Consultations
                  </th>

                  <th className="w-[100px]"></th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((item) => (
                  <tr className="shadow-lg bg-[white] h-[80px] border-y-2">
                    <td className="text-left">
                      <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        New
                      </span>
                    </td>
                    <td className="text-left">
                      <div className="flex items-center gap-2">
                        <div className="w-[50px]">
                          <img src={item.image} alt="" />
                        </div>
                        john
                      </div>
                    </td>
                    <td className="w-[200px] text-left">{item.email}</td>

                    <td className="w-[150px] text-left">{item.phone}</td>
                    <td className="w-[50px] text-center">21</td>

                    <td className="w-[50px] text-center text-[#094DB3]">
                      <span className="flex">
                        <img
                          src={dltbtn}
                          alt=""
                          onClick={(e) => handledelete(item._id)}
                        />
                        <img src={edit} alt="" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Totalusers;
