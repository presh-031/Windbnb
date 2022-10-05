import { MdSearch } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { FaMapMarkerAlt } from "react-icons/fa";

import { useState } from "react";

const Form = ({ locations }) => {
  const [mainFormIsOpen, setMainFormIsOpen] = useState(false);
  const cities = [];
  const countries = [];
  const formSuggestions = locations.map((location) => {
    const city = location.city;
    const country = location.country;
    cities.push(city);
    countries.push(country);
    console.log(cities);
    console.log(countries);
    return (
      <li>
        <FaMapMarkerAlt />
        {`${city}, ${country}`}
      </li>
    );
  });
  const mainForm = (
    <div className="border p-[1.125rem]  border-black absolute top-0 w-full bg-white z-10">
      <div className="flex justify-between border items-center ">
        <p className="font-bold text-[0.75rem]">Edit your search</p>
        <CgClose
          onClick={() => {
            setMainFormIsOpen(false);
          }}
        />
      </div>
      <div className=" mt-[1rem]">
        <div className="border py-[0.6875rem] px-[1.625rem]">
          <p className="text-[0.5625rem] font-bold">LOCATION</p>
          <p className="text-[0.875rem] text-[#bdbdbd]">Add location</p>
        </div>
        <div className="border py-[0.6875rem] px-[1.625rem]">
          <p className="text-[0.5625rem] font-bold">GUESTS</p>
          <p className="text-[0.875rem] text-[#bdbdbd]">Add guests</p>
        </div>
      </div>
      <ul>{formSuggestions}</ul>
    </div>
  );
  console.log(locations);
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
      {mainFormIsOpen && mainForm}
    </>
  );
};

export default Form;
