import { HiStar } from "react-icons/hi";

const Apartment = ({ data }) => {
  console.log(data);
  return (
    <div className="mb-[2rem]">
      <div className="rounded-2xl overflow-hidden ">
        <img
          src="https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
          alt="apartment"
        />
      </div>
      <div className="mt-[0.8306rem]">
        <div className="flex borer  justify-between">
          <div className="flex  ">
            <p className=" font-bold border border-black  text-[0.625rem] rounded-full grid items-center px-2">
              SUPER HOST
            </p>
            <p className="text-[0.75rem] ml-2">Entire apartment . 2 beds</p>
          </div>
          <p className="text-[0.75rem]  flex items-center ">
            <HiStar size="0.8725rem" className="boder mr-[0.3944rem]" color="#EB5757" />
            <span className="">4.40</span>
          </p>
        </div>
        <div>
          <p className="text-[0.875rem] font-bold">Stylist apartment in center of the city</p>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
