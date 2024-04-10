import deletebtn from "../Assets/dltbtn.svg";
import bell from "../Assets/bell.svg";
import editicon from "../Assets/editicon.svg";
import axios from "axios";
import { Baseurl } from "../utlis/apiservices";
import config from "../utlis/config";
import { useEffect, useState } from "react";

const Notification = () => {
  const [data, setData] = useState("");

  ///////////fetch notification////////////
  function fetchnotification() {
    axios
      .get(`${Baseurl}/api/v1/admin/notifications`, {
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
    fetchnotification();
  }, []);
  return (
    <div className="h-[600px]">
      <div className="flex justify-between items-center pt-5 ml-5 mr-5">
        <div className="text-2xl mb-5 text-[black] font-semibold">
          Notification Manager
          <br />
          <span className="text-[15px] text-[#525252]">
            Edit , Delete or push notification
          </span>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div>
            <img src={deletebtn} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-black font-semibold">Notification Title</span>

          <input className="placeholder:block w-[500px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-black font-semibold">Notification Status</span>
          <button className="bg-[#0F2C64] p-1 pl-10 pr-10 rounded text-white flex justify-center items-center gap-2">
            Enable
          </button>
          <button className="bg-[#0F2C64] p-1 pl-10 pr-10 rounded text-white flex justify-center items-center gap-2">
            Disable
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <div className="text-black font-semibold ">Notification Content</div>
          <input className="w-[700px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <div className="flex mt-3 gap-2">
            <button className="bg-[#0F2C64] p-2 pl-3 pr-3 rounded text-[white] flex justify-center items-center gap-2">
              Cancel
            </button>
            <button className="bg-[#0F2C64]  p-2 pl-3 pr-3 rounded text-white flex justify-center items-center gap-2">
              Save
            </button>
          </div>
        </div>
        <div>
          <div className="text-black font-semibold">Date Added</div>
          <input
            type="date"
            className="w-[150px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="mt-10 ml-1 mr-1">
        <table className="w-full border-collapse border border-slate-400 ... ">
          <thead>
            <tr>
              <th className="w-[20px] text-[#6D6D6D] border border-slate-300 ...">
                <input type="checkbox" />
              </th>
              <th className="text-center text-[#6D6D6D] w-[300px] border border-slate-300 ...">
                Notification Title
              </th>
              <th className="w-[300px] text-center text-[#6D6D6D] border border-slate-300 ...">
                Notification Content
              </th>

              <th className="w-[200px] text-center text-[#6D6D6D] border border-slate-300 ...">
                Notification Status
              </th>

              <th className="w-[150px] text-center text-[#6D6D6D] border border-slate-300 ...">
                Date Added
              </th>
              <th className="w-[100px] text-center text-[#6D6D6D] border border-slate-300 ...">
                Edit or Push
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item) => (
              <tr className="" key={item._id}>
                <td className="text-center p-5 border border-slate-300 ...">
                  <input type="checkbox" />
                </td>
                <td className="w-[200px] text-center border border-slate-300 ...">
                  {item.title}
                </td>
                <td className="w-[200px] text-center border border-slate-300 ...">
                  {item.message}
                </td>

                <td className="w-[50px] text-center border border-slate-300 ..."></td>

                <td className="w-[50px] text-center border border-slate-300 ..."></td>
                <td className="w-[50px] text-center border border-slate-300 ...">
                  <span className="flex gap-1 justify-center">
                    <img src={bell} alt="" /> <img src={editicon} alt="" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notification;
