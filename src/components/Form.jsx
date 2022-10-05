import { MdSearch } from "react-icons/md";
import { CgClose } from "react-icons/cg";

const Form = () => {
  const mainForm = (
    <div>
      <div>
        <p>Edit your search</p>
        <CgClose />
      </div>
    </div>
  );
  return (
    <>
      <section className="border cursor-pointer  text-sm flex w-fit mx-auto mt-6">
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
    </>
  );
};

export default Form;
