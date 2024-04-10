import deletebtn from "../Assets/dltbtn.svg";
import { FaSearch } from "react-icons/fa";
import edit from "../Assets/edit.svg";
import property from "../Assets/department/property.svg";
import corporate from "../Assets/department/corporate.svg";
import civil from "../Assets/department/civil.svg";
import criminal from "../Assets/department/criminal.svg";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { Baseurl } from "../utlis/apiservices";
import config from "../utlis/config";

const Department = () => {
  const [addnewdeparment, setaddnewdepartment] = useState(false);
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  ///////////fetch department////////////
  function fetchdepartment() {
    axios
      .get(`${Baseurl}/api/v1/admin/department`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    fetchdepartment();
  }, []);

  ////////////create department//////////
  const handlecreatedepartment = (e) => {
    e.preventDefault();
    console.log({ name });
    const requestData = {
      name: name,
    };

    axios
      .post(`${Baseurl}/api/v1/admin/createDepartment`, requestData, {
        headers: {
          Authorization: config.token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        alert("data added successfully");
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {addnewdeparment ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[600px] bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Edit View
                    <br />
                    <span className="text-[15px] text-[#525252]">
                      Customize and change/add Services
                    </span>
                  </h3>

                  <span
                    onClick={() => setaddnewdepartment(false)}
                    className="cursor-pointer"
                  >
                    <X />
                  </span>
                </div>
                <form onSubmit={handlecreatedepartment}>
                  <div className=" justify-center flex">
                    <div>
                      <label>Service Name</label>
                      <br />
                      <input
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                        placeholder="Service Name"
                        className="placeholder: block w-[533px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className=" justify-center flex gap-9 mt-4">
                    <div>
                      <label>Service Type</label>
                      <br />
                      <input
                        placeholder="Service Type"
                        className="placeholder: block w-[249px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label>Service Category</label>
                      <br />
                      <input
                        placeholder="Service Category"
                        className="placeholder: block w-[249px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className=" justify-center flex mt-4">
                    <div>
                      <label>Additional Service Information</label>
                      <br />
                      <input
                        placeholder="Additional Service Information"
                        className="placeholder: block w-[533px] h-40 rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-5 m-5">
                    <button
                      className="text-[#0F2C64] p-2 pl-5 pr-5 rounded bg-white border border-[#0F2C64]"
                      onClick={() => setaddnewdepartment(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#0F2C64] p-2 pl-5 pr-5 rounded text-white flex justify-center items-center gap-2"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className="h-[600px]">
        <div className="flex justify-between items-center pt-5 ml-5 mr-5">
          <div className="text-2xl mb-5 text-[black] font-semibold ">
            Departments
          </div>
          <div className="flex">
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
                  placeholder="Search Lawyer"
                />
              </div>

              <button
                className="bg-[#0F2C64] p-2 pl-5 pr-5 rounded text-white"
                onClick={() => setaddnewdepartment(true)}
              >
                Create Department
              </button>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div>
                <img src={deletebtn} alt="" />
              </div>
              <div>
                <img src={edit} alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex justify-end gap-2 items-center mt-3">
          <input type="checkbox" className="w-[18px] h-[18px]" />
          <label className="text-[#6D6D6D]">Select All</label>
        </div>
        <div className="flex flex-wrap gap-10 mt-10 ml-10">
          <div className="cursor-pointer">
            <div className="shadow-lg w-[180px] h-[180px] rounded flex flex-col justify-center items-center">
              <div>
                <img src={property} alt="" />
              </div>
              <div className="flex justify-center mt-5 text-black font-semibold">
                Property Lawyer
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="shadow-lg w-[180px] h-[180px] rounded flex flex-col justify-center items-center">
              <div>
                <img src={criminal} alt="" />
              </div>
              <div className="flex justify-center mt-5 text-black font-semibold">
                Criminal Lawyer
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="shadow-lg w-[180px] h-[180px] rounded flex flex-col justify-center items-center">
              <div>
                <img src={property} alt="" />
              </div>
              <div className="flex justify-center mt-5 text-black font-semibold">
                Tax Lawyer
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="shadow-lg w-[180px] h-[180px] rounded flex flex-col justify-center items-center">
              <div>
                <img src={corporate} alt="" />
              </div>
              <div className="flex justify-center mt-5 text-black font-semibold">
                Corporate Lawyers
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="shadow-lg w-[180px] h-[180px] rounded flex flex-col justify-center items-center">
              <div>
                <img src={civil} alt="" />
              </div>
              <div className="flex justify-center mt-5 text-black font-semibold">
                Civil Rights Lawyer
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="shadow-lg w-[180px] h-[180px] rounded flex flex-col justify-center items-center">
              <div>
                <img src={property} alt="" />
              </div>
              <div className="flex justify-center mt-5 text-black font-semibold">
                Property Lawyer
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="shadow-lg w-[180px] h-[180px] rounded flex flex-col justify-center items-center">
              <div>
                <img src={criminal} alt="" />
              </div>
              <div className="flex justify-center mt-5 text-black font-semibold">
                Criminal Lawyer
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="shadow-lg w-[180px] h-[180px] rounded flex flex-col justify-center items-center">
              <div>
                <img src={property} alt="" />
              </div>
              <div className="flex justify-center mt-5 text-black font-semibold">
                Tax Lawyer
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Department;
