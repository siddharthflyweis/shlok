import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import dltbtn from "../Assets/dltbtn.svg";
import edit from "../Assets/edit.svg";
import userimage from "..//Assets/userimage.svg";
import { X } from "lucide-react";
import axios from "axios";
import { Baseurl } from "../utlis/apiservices";
import { Navigate } from "react-router-dom";
import config from "../utlis/config";
import { useNavigate } from "react-router-dom";
// import { headers } from "../utlis/config";
const Lawyers = () => {
  const [addnewlawyer, setaddnewlawyer] = useState(false);
  const [data, setData] = useState("");

  const [firstName, setFirstname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");

  const navigate = useNavigate();

  ///////////fetch lawyer////////////
  function fetchLawyer() {
    axios
      .get(`${Baseurl}/api/v1/admin/lawyer`, {
        headers: {
          Authorization: config.token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    fetchLawyer();
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
          navigate("/Lawyers");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate("/Lawyers");
    }
  }

  //////create lawyer/////////
  const handlecreatelawyer = (e) => {
    e.preventDefault();
    console.log({firstName,phone,email,country,state,district,pincode});

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("district", district);
    formData.append("pincode", pincode);

    axios
      .post(`${Baseurl}/api/v1/admin/CreateLawyer`, formData, {
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
      {addnewlawyer ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[1200px] bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add /Edit New Lawyer
                    <br />
                    <span className="text-[15px] text-[#525252]">
                      fill detail of new lawyer
                    </span>
                  </h3>

                  <span
                    onClick={() => setaddnewlawyer(false)}
                    className="cursor-pointer"
                  >
                    <X />
                  </span>
                </div>
                <hr />
                <form onSubmit={handlecreatelawyer}>
                  <div className="flex justify-center flex-wrap gap-5 mt-5">
                    <div>
                      <label>First Name</label>
                      <br />
                      <input
                        value={firstName}
                        onChange={(e) => setFirstname(e.target.value)}
                        placeholder="First Name"
                        className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label>Last Name</label>
                      <br />
                      <input
                        placeholder="Last Name"
                        className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div>
                      <label>Email</label>
                      <br />
                      <input
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Email"
                        className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label>Phone Number</label>
                      <br />
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number"
                        className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label>First Line Address</label>
                      <br />
                      <input
                        placeholder="First Line Address"
                        className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label>Second Line Address</label>
                      <br />
                      <input
                        placeholder="Second Line Address"
                        className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label>Country</label>
                      <br />
                      <input
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Country"
                        className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div>
                      <label>State</label>
                      <br />
                      <input
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="State"
                        className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label>District</label>
                      <br />
                      <input
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        placeholder="District"
                        className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label>Pin Code</label>
                      <br />
                      <input
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        placeholder="Pin Code"
                        className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label>Kyc</label>
                      <br />
                      <input
                        placeholder="Kyc"
                        className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label>Aadhar Card Number</label>
                      <br />
                      <input
                        placeholder="Aadhar Card Number"
                        className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label>Bar registration Number</label>
                      <br />
                      <input
                        placeholder="Bar registration Number"
                        className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label>Bar Certificate</label>
                      <br />
                      <input
                        placeholder="Bar Certificate"
                        className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="ml-20">
                    <div>State Lawyer Services</div>
                    <div className="flex gap-2">
                      <button className="text-[#0F2C64] p-2 pl-5 pr-5 rounded bg-[#EEF4FF]  border border-[#0F2C64]">
                        Legal Adviser
                      </button>
                      <button className="text-[#0F2C64] p-2 pl-5 pr-5 rounded bg-[#EEF4FF]  border border-[#0F2C64]">
                        Real State Lawyer
                      </button>
                      <button className="text-[#0F2C64] p-2 pl-5 pr-5 rounded bg-[#EEF4FF]  border border-[#0F2C64]">
                        Corporate Lawyer
                      </button>
                      <button className="text-[#0F2C64] p-2 pl-5 pr-5 rounded bg-[#EEF4FF] border border-[#0F2C64]">
                        Corporate Advisor
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end gap-5 m-5">
                    <button
                      className="text-[#0F2C64] p-2 pl-5 pr-5 rounded bg-white border border-[#0F2C64]"
                      onClick={() => setaddnewlawyer(false)}
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

      <div>
        <div className="flex justify-between">
          <div className="text-3xl font-semibold">Lawyers</div>
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
                  placeholder="Search Lawyer"
                />
              </div>

              <button
                className="bg-[#0F2C64] p-2 pl-5 pr-5 rounded-3xl text-white"
                onClick={() => setaddnewlawyer(true)}
              >
                Add New Lawyer
              </button>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 mb-[200px] mt-5 p-5">
          <table className="w-full ">
            <thead>
              <tr>
                <th className="w-[50px] text-left text-[#6D6D6D]"></th>
                <th className="w-[200px] text-left text-[#6D6D6D]">
                  Lawyer Name
                </th>
                <th className="text-left text-[#6D6D6D] w-[200px]">Email</th>
                <th className="w-[150px] text-left text-[#6D6D6D]">
                  Phone no.
                </th>
                <th className=" w-[200px] text-center text-[#6D6D6D]">
                  Total Consultations
                </th>

                <th className="w-[200px] text-center text-[#6D6D6D]">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="">
              {data?.data?.map((item) => (
                <tr className="shadow-lg bg-[white] h-[80px]" key={item._id}>
                  <td className="text-center w-[80px]">
                    <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      New
                    </span>
                  </td>
                  <td className="text-left">
                    <div className="flex items-center gap-2">
                      <img src={userimage} alt="" />
                      {item.fullName}
                    </div>
                  </td>
                  <td className="w-[200px] text-left">{item.email}</td>

                  <td className="w-[150px] text-left">{item.phone}</td>
                  <td className="w-[50px] text-center">21</td>
                  <td className=" text-center ">
                    <span className="bg-[#D8E3FF] text-[#094DB3] rounded-2xl p-2">
                      pending
                    </span>
                  </td>
                  <td className=" text-center ">
                    <div className="flex">
                      <div
                        onClick={(e) => handledelete(item._id)}
                        className="cursor-pointer"
                      >
                        <img src={dltbtn} alt="" />
                      </div>
                      <div>
                        <img src={edit} alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Lawyers;
