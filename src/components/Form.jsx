import { MdSearch } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { FaMapMarkerAlt } from "react-icons/fa";

import { useState } from "react";

const Form = () => {
  const [mainFormIsOpen, setMainFormIsOpen] = useState(false);

  function handleClick(e) {
    console.log(e.target.innerText);
  }
  return (
    <>
      <section
        onClick={() => {
          setMainFormIsOpen(true);
        }}
        className="border cursor-pointer  text-sm flex w-fit mx-auto mt-6"
      >
        <div className="border px-4 py-2 ">
          <p className="text-[#BDBDBD]">Add location</p>
        </div>
        <div className="border px-4 py-2">
          <p className="text-[#BDBDBD]">Add guests</p>
        </div>
        <div className="border px-4  flex items-center justify-center">
          <MdSearch color="#EB5757" size="1.8rem" className="" />
        </div>
      </section>
      {mainFormIsOpen && (
        <div className=" p-[1.125rem]   absolute top-0 w-full bg-white z-10">
          <div className="flex font-bold text-[0.75rem] justify-between  items-center ">
            Edit your search
            <CgClose
              size={20}
              onClick={() => {
                setMainFormIsOpen(false);
              }}
            />
          </div>
          <div className=" mt-[1rem] rounded-[1rem] shadow-[0_1px_6px_rgba(0,0,0,0.1)]">
            <div className=" py-[0.6875rem] px-[1.625rem]  border-b">
              <p className="text-[0.5625rem] font-bold">LOCATION</p>
              <p className="text-[0.875rem] text-[#bdbdbd]">Add location</p>
            </div>
            <div className=" py-[0.6875rem] px-[1.625rem]">
              <p className="text-[0.5625rem] font-bold">GUESTS</p>
              <p className="text-[0.875rem] text-[#bdbdbd]">Add guests</p>
            </div>
          </div>
          <div className="flex flex-col mb-[11.375rem] mt-[2.25rem] ml-[1.75rem]  gap-y-[2.25rem]">
            <div className="flex items-center gap-x-[0.625rem] text-[0.875rem]">
              <FaMapMarkerAlt /> <p onClick={handleClick}>Helsinki, Finland</p>
            </div>
            <div className="flex items-center gap-x-[0.625rem] text-[0.875rem]">
              <FaMapMarkerAlt /> <p onClick={handleClick}>Turku, Finland</p>
            </div>
            <div className="flex items-center gap-x-[0.625rem] text-[0.875rem]">
              <FaMapMarkerAlt /> <p onClick={handleClick}>Oulu, Finland</p>
            </div>
            <div className="flex items-center gap-x-[0.625rem] text-[0.875rem]">
              <FaMapMarkerAlt /> <p onClick={handleClick}>Vaasa, Finland</p>
            </div>
          </div>
          <div className="text-center">
            <button className="rounded-[1rem] px-[1.5rem] py-[0.9375rem] bg-[#eb5757] text-[#f2f2f2] mb-[0.75rem] mx-auto border flex items-center gap-x-[0.6844rem]">
              <MdSearch />
              Search
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
