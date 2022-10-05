// import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import { MdSearch } from "react-icons/md";
import axios from "axios";
import Apartment from "./components/Apartment";
const App = () => {
  const [apartments, setApartments] = useState(null);
  const [staysNum, setStaysNum] = useState(null);
  function getAllApartments() {
    axios
      .get("/data/stays.json")
      .then((response) => {
        const data = response.data;
        // console.log(data);
        console.log(data.length);

        setApartments(
          data.map((apartment) => {
            return <Apartment data={apartment} />;
          })
        );
        setStaysNum(data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getAllApartments();
  }, []);

  return (
    <div className="App">
      <Header />
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
      <main className="w-[21.875rem] mx-auto mt-2">
        <div className="flex mb-[1.5rem] justify-between border">
          <h2 className="font-bold">Stays in Finland</h2>
          <p>
            {staysNum} {staysNum && "stays"}
          </p>
        </div>
        <div>{apartments}</div>
      </main>
    </div>
  );
};

export default App;
