import { useState, useEffect } from "react";
import Header from "./components/Header";
import axios from "axios";
import Form from "./components/Form";
import Apartment from "./components/Apartment";

const App = () => {
  const [apartments, setApartments] = useState(null);
  const [staysNum, setStaysNum] = useState(null);
  const [locations, setLocations] = useState(null);
  function getAllApartments() {
    axios
      .get("/data/stays.json")
      .then((response) => {
        const data = response.data;

        setApartments(
          data.map((apartment) => {
            return <Apartment key={apartment.key} data={apartment} />;
          })
        );
        setStaysNum(data.length);
        setLocations(data);
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
      {locations && <Form />}
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
