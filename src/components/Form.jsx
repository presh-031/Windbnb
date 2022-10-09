import { MdSearch } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { FaMapMarkerAlt } from "react-icons/fa";

import { useState } from "react";

import Counter from "./Counter";

const Form = () => {
  console.count("Form ");
  const [mainFormIsOpen, setMainFormIsOpen] = useState(false);
  const [location, setLocation] = useState(null);
  const [adultGuests, setAdultGuests] = useState(null);
  const [childrenGuests, setChildrenGuests] = useState(null);
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

  function handleSearch() {
    console.log(location);
    console.log(adultGuests);
    console.log(childrenGuests);
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
            <div
              className=" py-[0.6875rem] px-[1.625rem]
               focus-within:border-[#000000]
                border-b"
              onClick={handleAddLocationClick}
            >
              <p className="text-[0.5625rem] font-bold">LOCATION</p>
              <p className={location ? "" : "text-[0.875rem] text-[#bdbdbd]"}>{location ? location : "Add location"}</p>
            </div>
            <div className=" py-[0.6875rem] px-[1.625rem]" onClick={handleAddGuestsClick}>
              <p className="text-[0.5625rem] font-bold">GUESTS</p>
              <p className={childrenGuests || adultGuests ? "" : "text-[0.875rem] text-[#bdbdbd]"}>
                {childrenGuests || adultGuests ? `${childrenGuests + adultGuests} guests ` : "Add guests"}
              </p>
            </div>
          </div>
          {showLocations && (
            <div className="flex flex-col mb-[11.375rem] mt-[2.25rem] ml-[1.75rem]  gap-y-[2.25rem]">
              <div className="flex items-center gap-x-[0.625rem] text-[0.875rem]">
                <FaMapMarkerAlt /> <p onClick={handleLocationClick}>Helsinki, Finland</p>
              </div>
              <div className="flex items-center gap-x-[0.625rem] text-[0.875rem]">
                <FaMapMarkerAlt /> <p onClick={handleLocationClick}>Turku, Finland</p>
              </div>
              <div className="flex items-center gap-x-[0.625rem] text-[0.875rem]">
                <FaMapMarkerAlt /> <p onClick={handleLocationClick}>Oulu, Finland</p>
              </div>
              <div className="flex items-center gap-x-[0.625rem] text-[0.875rem]">
                <FaMapMarkerAlt /> <p onClick={handleLocationClick}>Vaasa, Finland</p>
              </div>
              <div className="flex items-center gap-x-[0.625rem] text-[0.875rem]">
                <FaMapMarkerAlt /> <p onClick={handleAnyLocationClick}>Any</p>
              </div>
            </div>
          )}
          {showGuests && (
            <div className=" mt-[3rem] ml-[1rem] mb-[11.375rem]">
              <div className="mb-[3.25rem]">
                <p className="text-[0.875rem] font-bold">Adults</p>
                <p className="text-[0.875rem]">Ages 13 or above</p>
                <Counter handleCount={handleFirstCount} />
              </div>
              <div>
                <p className="text-[0.875rem] font-bold">Children</p>
                <p className="text-[0.875rem]">Ages 2-12</p>
                <Counter handleCount={handleSecondCount} />
              </div>
            </div>
          )}
          <div className="text-center">
            <button
              onClick={handleSearch}
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
