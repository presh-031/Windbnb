import { useState } from "react";
import { GrSubtract, GrAdd } from "react-icons/gr";

const Counter = ({ handleCount }) => {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    handleCount(count + 1);
  }

  function decrementCount() {
    // Count shouldn't go less than 0.
    count === 0 ? setCount(count) : setCount((prevCount) => prevCount - 1);
    handleCount(count === 0 ? count : count - 1);
  }

  return (
    <div className="flex gap-x-[0.9375rem] text-[0.875rem] items-center">
      <button onClick={decrementCount} className="border rounded-[0.25rem] p-[0.4581rem]">
        <GrSubtract />
      </button>
      <span className="">{count}</span>
      <button onClick={incrementCount} className="border  rounded-[0.25rem] p-[0.4581rem]">
        <GrAdd />
      </button>
    </div>
  );
};

export default Counter;
