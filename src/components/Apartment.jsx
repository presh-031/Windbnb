import { HiStar } from "react-icons/hi";

const Apartment = ({ data }) => {
  console.log(data);
  return (
    <div className="mb-[2rem] w-[21.875rem] mx-auto">
      <div className="rounded-2xl h-[14.8969rem]  overflow-hidden ">
        <img className="w-[100%] h-[100%]" src={data.photo} alt="apartment" />
      </div>
      <div className="mt-[0.8306rem]">
        <div className="flex borer  justify-between">
          <div className="flex  ">
            {data.superHost && (
              <p className="mr-2 font-bold border border-black  text-[0.625rem] rounded-full grid items-center px-2">
                SUPER HOST
              </p>
            )}
            <p className="text-[0.75rem] ">
              {data.type} {data.beds && ` . ${data.beds} beds`}{" "}
            </p>
          </div>
          <p className="text-[0.75rem]  flex items-center ">
            <HiStar size="0.8725rem" className=" mr-[0.3944rem]" color="#EB5757" />
            <span className=""> {data.rating} </span>
          </p>
        </div>
        <div>
          <p className="text-[0.875rem] font-bold"> {data.title} </p>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
