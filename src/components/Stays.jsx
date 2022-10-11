const Stays = ({ staysNum }) => {
  return (
    <>
      <div className="w-[21.875rem] sm:w-[95%]  mx-auto   max-w-[62.5rem]  mt-[2.3125rem] flex mb-[1.5rem] justify-between ">
        <h2 className="font-bold">Stays in Finland</h2>
        <p>
          {staysNum} {staysNum && "stays"}
        </p>
      </div>
    </>
  );
};

export default Stays;
