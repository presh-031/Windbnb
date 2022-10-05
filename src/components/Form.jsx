import { MdSearch } from "react-icons/md";
import { CgClose } from "react-icons/cg";

import { useState } from "react";

const Form = () => {
  const [mainFormIsOpen, setMainFormIsOpen] = useState(false);
  const mainForm = (
    <div className="border border-black absolute top-0 w-full bg-white z-10 h-32">
      <div>
        <p>Edit your search</p>
        <CgClose
          onClick={() => {
            setMainFormIsOpen(false);
          }}
        />
      </div>
    </div>
  );
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
