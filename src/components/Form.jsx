import { MdSearch } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { FaMapMarkerAlt } from "react-icons/fa";

import { useState } from "react";

import Counter from "./Counter";

const Form = ({ getFilterData }) => {
  const [mainFormIsOpen, setMainFormIsOpen] = useState(false);
  const [location, setLocation] = useState(null);
  const [adultGuests, setAdultGuests] = useState(0);
  const [childrenGuests, setChildrenGuests] = useState(0);
  const [showLocations, setShowLocations] = useState(true);
  const [showGuests, setShowGuests] = useState(false);

  function handleLocationClick(e) {
    setLocation(e.target.innerText);
  }

  function handleAnyLocationClick() {
    setLocation(null);
  }

  function handleAddLocationClick() {
    setShowLocations(true);
    setShowGuests(false);
  }

  function handleAddGuestsClick() {
    setShowLocations(false);
    setShowGuests(true);
  }

  function handleFirstCount(firstCount) {
    setAdultGuests(firstCount);
  }

  function handleSecondCount(secondCount) {
    setChildrenGuests(secondCount);
  }

  function handleSearchBtnClick() {
    getFilterData(location, adultGuests + childrenGuests);
    setLocation(null);
    setChildrenGuests(0);
    setAdultGuests(0);
    setMainFormIsOpen(false);
  }
  return (
    <>
      <section
        onClick={() => {
          setMainFormIsOpen(true);
        }}
        className="shadow-[0_1px_6px_rgba(0,0,0,0.1)] rounded-2xl  cursor-pointer  text-sm flex w-fit mx-auto mt-[1.25rem] sm:m-0 sm:mt-0"
      >
        <div className="px-[1rem] border-r py-[0.625rem] flex items-center ">
          <p className="text-[#BDBDBD]">{location ? location : "Add location"}</p>
        </div>
        <div className="px-[1rem] border-r py-[0.625rem] flex items-center">
          <p className="text-[#BDBDBD]">Add guests</p>
        </div>
        <div className="px-[1rem] py-[0.625rem] flex items-center justify-center">
          <MdSearch color="#EB5757" size="1.8rem" className="" />
        </div>
      </section>
      {mainFormIsOpen && (
        <div className=" p-[1.125rem] right-0 left-0  absolute top-0 w-full bg-white z-10">
          <div className="flex sm:hidden font-bold text-[0.75rem] justify-between  items-center ">
            Edit your search
            <CgClose
              className="cursor-pointer"
              size={20}
              onClick={() => {
                setMainFormIsOpen(false);
              }}
            />
          </div>
          <div className=" mt-[1rem] sm:flex border border-red-800 rounded-[1rem] shadow-[0_1px_6px_rgba(0,0,0,0.1)]">
            <div
              className="  py-[0.6875rem] px-[1.625rem] border border-red-800
                border-b cursor-pointer "
              onClick={handleAddLocationClick}
            >
              <p className="text-[0.5625rem] font-bold">LOCATION</p>
              <p className={location ? "" : "text-[0.875rem] text-[#bdbdbd]"}>Add location</p>
            </div>
            <div className=" py-[0.6875rem] px-[1.625rem] cursor-pointer" onClick={handleAddGuestsClick}>
              <p className="text-[0.5625rem] font-bold">GUESTS</p>
              <p className={childrenGuests || adultGuests ? "" : "text-[0.875rem] text-[#bdbdbd]"}>
                {childrenGuests || adultGuests ? `${childrenGuests + adultGuests} guests ` : "Add guests"}
              </p>
            </div>
            <div className="text-center hidden sm:block">
              <button
                onClick={handleSearchBtnClick}
                className="rounded-[1rem] px-[1.5rem] py-[0.9375rem] bg-[#eb5757] text-[#f2f2f2] mb-[0.75rem] mx-auto border flex items-center gap-x-[0.6844rem]"
              >
                <MdSearch />
                Search
              </button>
            </div>
          </div>
          {showLocations && (
            <div className="flex flex-col mb-[11.375rem] mt-[2.25rem] ml-[1.75rem]  gap-y-[2.25rem]">
              <div className="flex cursor-pointer items-center gap-x-[0.625rem] text-[0.875rem]">
                <FaMapMarkerAlt /> <p onClick={handleLocationClick}>Helsinki, Finland</p>
              </div>
              <div className="flex cursor-pointer items-center gap-x-[0.625rem] text-[0.875rem]">
                <FaMapMarkerAlt /> <p onClick={handleLocationClick}>Turku, Finland</p>
              </div>
              <div className="flex cursor-pointer items-center gap-x-[0.625rem] text-[0.875rem]">
                <FaMapMarkerAlt /> <p onClick={handleLocationClick}>Oulu, Finland</p>
              </div>
              <div className="flex cursor-pointer items-center gap-x-[0.625rem] text-[0.875rem]">
                <FaMapMarkerAlt /> <p onClick={handleLocationClick}>Vaasa, Finland</p>
              </div>
              <div className="flex cursor-pointer items-center gap-x-[0.625rem] text-[0.875rem]">
                <FaMapMarkerAlt /> <p onClick={handleAnyLocationClick}>Any</p>
              </div>
            </div>
          )}
          {showGuests && (
            <div className=" mt-[3rem] ml-[1rem] mb-[11.375rem]">
              <div className="mb-[3.25rem]">
                <p className="text-[0.875rem] font-bold">Adults</p>
                <p className="text-[0.875rem]">Ages 13 or above</p>
                <Counter handleCount={handleFirstCount} count={adultGuests} />
              </div>
              <div>
                <p className="text-[0.875rem] font-bold">Children</p>
                <p className="text-[0.875rem]">Ages 2-12</p>
                <Counter handleCount={handleSecondCount} count={childrenGuests} />
              </div>
            </div>
          )}
          <div className="text-center sm:hidden">
            <button
              onClick={handleSearchBtnClick}
              className="rounded-[1rem] px-[1.5rem] py-[0.9375rem] bg-[#eb5757] text-[#f2f2f2] mb-[0.75rem] mx-auto border flex items-center gap-x-[0.6844rem]"
            >
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
