const Stays = ({ staysNum }) => {
  return (
    <div className="w-[21.875rem] mx-auto mt-[2.3125rem]">
      <div className="flex mb-[1.5rem] justify-between ">
        <h2 className="font-bold">Stays in Finland</h2>
        <p>
          {staysNum} {staysNum && "stays"}
        </p>
      </div>
    </div>
  );
};

export default Stays;
