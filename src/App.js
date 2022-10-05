// import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import { MdSearch } from "react-icons/md";
import axios from "axios";
// import data from "./data/stays.json";
const App = () => {
  function getAllApartments() {
    axios
      .get("../public/data./stays.json")
      .then((response) => {
        console.log(response);
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
      <section className="border  text-sm flex w-fit mx-auto mt-6">
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
      <main className="w-[90%] mx-auto mt-2">
        <div className="flex justify-between border">
          <h2 className="font-bold">Stays in Finland</h2>
          <p>12+ stays</p>
        </div>
        <div></div>
      </main>
    </div>
  );
};

export default App;
