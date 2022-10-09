import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Form from "./components/Form";
import Apartment from "./components/Apartment";
import Stays from "./components/Stays";

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
    <>
      <Header />
      {locations && <Form />}
      <Stays staysNum={staysNum} />
      <div>{apartments}</div>
    </>
  );
};

export default App;
