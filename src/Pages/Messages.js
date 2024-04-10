import { FaSearch } from "react-icons/fa";

const Messages = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="text-3xl font-semibold">
          Real Time Chats
          <br />
          <span className="text-[15px] text-[#525252]">
            View all real time chats
          </span>
        </div>
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
                placeholder="Search Chats"
              />
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default Messages;
