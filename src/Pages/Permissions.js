import { FaSearch } from "react-icons/fa";
import userimage from "../Assets/userimage.svg";
import permissionclose from "../Assets/permissionclose.svg";
import permissionedit from "../Assets/permissionedit.svg";
import { useState } from "react";
const Permissions = () => {
  const [createpermission, setceatepermission] = useState(false);
  const [editpermission, seteditpermission] = useState(false);

  return (
    <>
      {editpermission ? (
        <>
          <div className=" w-full h-[700px] shadow-lg">
            <div className="bg-[#0F2C64] h-[90px] flex justify-between items-center pl-3 pr-3">
              <div className="text-white text-3xl">
                Edit Permissions & Role’s
              </div>
              <div
                onClick={() => seteditpermission(false)}
                className="cursor-pointer"
              >
                <img src={permissionclose} alt="" />
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center">
                <div className="w-[150px] text-[#0F2C64] font-semibold">
                  Employee Details
                </div>
                <hr className=" border-gray-400 w-full" />
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <label className="text-[#0F2C64] font-semibold">
                    Employee Type
                  </label>
                  <br />
                  <select className="placeholder: block w-[350px] h-[40px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option>Advocate</option>
                    <option>Junior Lawyer</option>
                  </select>
                </div>
                <div>
                  <label className="text-[#0F2C64] font-semibold">Name</label>
                  <br />
                  <input
                    placeholder="Name"
                    className="placeholder: block w-[350px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <label className="text-[#0F2C64] font-semibold">Mobile</label>
                  <br />
                  <input
                    placeholder="Mobile"
                    className="placeholder: block w-[350px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <label className="text-[#0F2C64] font-semibold">Email</label>
                  <br />
                  <input
                    placeholder="Email"
                    className="placeholder: block w-[350px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex items-center mt-10">
                <div className="w-[120px] text-[#0F2C64] font-semibold">
                  Assign Roles
                </div>
                <hr className=" border-gray-400 w-full" />
              </div>
              <div className="flex justify-between mt-5">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input type="checkbox" /> Lawyer Profile & Total users
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" />
                    Meetings, Messages, Cases & Bookings
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" /> Services, Departments
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" /> Banners
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" /> All files / Categories
                  </div>
                </div>
                <div>
                  <select className="placeholder: block w-[350px] h-[40px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option>active</option>
                    <option>inactive</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-5 mt-10">
                <button className="bg-[#0F2C64] p-2 pl-5 pr-5 rounded text-white flex justify-center items-center gap-2">
                  Delete
                </button>
                <button className="bg-[#0F2C64] p-2 pl-5 pr-5 rounded text-white flex justify-center items-center gap-2">
                  Update
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {createpermission ? (
            <div className=" w-full h-[700px] shadow-lg">
              <div className="bg-[#0F2C64] h-[90px] flex justify-between items-center pl-3 pr-3">
                <div className="text-white text-3xl">
                  Create Permissions & Role’s
                </div>
                <div
                  onClick={() => setceatepermission(false)}
                  className="cursor-pointer"
                >
                  <img src={permissionclose} alt="" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center">
                  <div className="w-[150px] text-[#0F2C64] font-semibold">
                    Employee Details
                  </div>
                  <hr className=" border-gray-400 w-full" />
                </div>
                <div className="flex justify-between mt-5">
                  <div>
                    <label className="text-[#0F2C64] font-semibold">
                      Employee Type
                    </label>
                    <br />
                    <select className="placeholder: block w-[350px] h-[40px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <option>Advocate</option>
                      <option>Junior Lawyer</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[#0F2C64] font-semibold">Name</label>
                    <br />
                    <input
                      placeholder="Name"
                      className="placeholder: block w-[350px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-5">
                  <div>
                    <label className="text-[#0F2C64] font-semibold">
                      Mobile
                    </label>
                    <br />
                    <input
                      placeholder="Mobile"
                      className="placeholder: block w-[350px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label className="text-[#0F2C64] font-semibold">
                      Email
                    </label>
                    <br />
                    <input
                      placeholder="Email"
                      className="placeholder: block w-[350px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-10">
                  <div className="w-[120px] text-[#0F2C64] font-semibold">
                    Assign Roles
                  </div>
                  <hr className=" border-gray-400 w-full" />
                </div>
                <div className="flex justify-between mt-5">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <input type="checkbox" /> Lawyer Profile & Total users
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" />
                      Meetings, Messages, Cases & Bookings
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" /> Services, Departments
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" /> Banners
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" /> All files / Categories
                    </div>
                  </div>
                  <div>
                    <select className="placeholder: block w-[350px] h-[40px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <option>active</option>
                      <option>inactive</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end gap-5 mt-10">
                  <button className="bg-[#0F2C64] p-2 pl-5 pr-5 rounded text-white flex justify-center items-center gap-2">
                    Create
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between">
                <div className="text-3xl font-semibold">
                  Permissions & Rolls
                </div>
                <div>
                  <div className="flex justify-center items-center gap-2">
                    <button
                      className="bg-[#0F2C64] p-2 pl-5 pr-5 rounded-xl text-white"
                      onClick={() => setceatepermission(true)}
                    >
                      Create Permission
                    </button>
                    <div className="relative  rounded-md">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="bg-[#0F2C64] p-2.5  ml-[-3px] rounded-l-full text-white">
                          <FaSearch />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="placeholder: ml-2 block w-[250px] rounded-3xl border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Search Rolls"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 ml-1 mr-1">
                <table className=" ">
                  <thead>
                    <tr>
                      <th className="w-[200px] text-left text-[#0F2C64]">
                        Name
                      </th>
                      <th className="text-left text-[#0F2C64] w-[180px] ">
                        Mobile
                      </th>
                      <th className="w-[180px] text-left text-[#0F2C64] ">
                        Email
                      </th>

                      <th className="w-[180px] text-left text-[#0F2C64] ">
                        Status
                      </th>
                      <th className="text-left text-[#0F2C64] w-[400px] ">
                        Permissions
                      </th>
                      <th className="text-left text-[#0F2C64] "></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t-2 border-b-2 h-[80px]">
                      <td className="text-center flex items-center">
                        <img src={userimage} alt="" />
                        <div>
                          <div className="text-xl">siddharth</div>
                          <div className="text-[#0F2C64] text-[10px]">
                            Real Estate
                          </div>
                        </div>
                      </td>
                      <td className=" text-leftborder ">+91 1233222222</td>
                      <td className="text-leftborder  ">yash@gmail.com</td>

                      <td className="text-[#26A843]">Active</td>
                      <td>Lawyer Profile & Total users</td>
                      <td
                        className="cursor-pointer"
                        onClick={() => seteditpermission(true)}
                      >
                        <img src={permissionedit} alt="" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Permissions;
