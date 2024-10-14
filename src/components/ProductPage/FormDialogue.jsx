import { useState } from "react";

// eslint-disable-next-line react/prop-types
const FormDialogue = ({ isModalOpen, setIsModalOpen }) => {
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <div
          id="default-modal"
          className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden inset-0 flex"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-2xl p-2 ">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={toggleModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>


              <h1 className="text-center text-lg font-bold ">
                Please Provide Exact Address for faster delivery
              </h1>

              <form className="mt-4">
                    <div className="flex gap-5 mt-3 items-center">
                        <label htmlFor="" className="w-[20%]">First Name <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="First Name" className="p-1 rounded-md outline-none focus:shadow-sm border-[1px] border-black w-[80%] " />
                    </div>
                    <div className="flex gap-5 mt-3 items-center">
                        <label htmlFor="" className="w-[20%]">Last Name <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Last Name" className="p-1 rounded-md outline-none focus:shadow-sm border-[1px] border-black w-[80%] " />
                    </div>
                    <div className="flex gap-5 mt-3 items-start">
                        <label htmlFor="" className="w-[20%]">Flat No, House No, Building, Company, Apartment <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Flat No, House No, Building, Company, Apartment" className="p-1 rounded-md outline-none focus:shadow-sm border-[1px] border-black w-[80%] " />
                    </div>
                    <div className="flex gap-5 mt-3 items-start">
                        <label htmlFor="" className="w-[20%]">Area, Street, Sector, Village, Landmark <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Area, Street, Sector, Village, Landmark " className="p-1 rounded-md outline-none focus:shadow-sm border-[1px] border-black w-[80%] " />
                    </div>
                    
                    <div className="flex gap-5 mt-3 items-start">
                        <label htmlFor="" className="w-[20%]">City<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="City" className="p-1 rounded-md outline-none focus:shadow-sm border-[1px] border-black w-[80%] " />
                    </div>
                    
                    <div className="flex gap-5 mt-3 items-start">
                        <label htmlFor="" className="w-[20%]">Pincode<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Pincode" className="p-1 rounded-md outline-none focus:shadow-sm border-[1px] border-black w-[80%] " />
                    </div>
                    <div className="flex gap-5 mt-3 items-start">
                        <label htmlFor="" className="w-[20%]">State<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="State" className="p-1 rounded-md outline-none focus:shadow-sm border-[1px] border-black w-[80%] " />
                    </div>
              </form>




            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormDialogue;
