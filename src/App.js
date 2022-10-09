// import { useState, useEffect } from "react";
// import axios from "axios";

import Stays from "./components/Stays";
import Header from "./components/Header";
import Form from "./components/Form";
import Apartment from "./components/Apartment";

import { staysdata } from "./data/staysdata";

const App = () => {
  // const [apartments, setApartments] = useState(null);
  // const [staysNum, setStaysNum] = useState(null);
  // const [locations, setLocations] = useState(null);
  // function getAllApartments() {
  //   axios
  //     .get("/data/stays.json")
  //     .then((response) => {
  //       const data = response.data;

  // setApartments(
  //   staysdata.map((apartment) => {
  //     return <Apartment key={apartment.key} data={apartment} />;
  //   })
  // );
  // setStaysNum(staysdata.length);
  // setLocations(staysdata);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // useEffect(() => {
  //   getAllApartments();
  // }, []);

  return (
    <>
      <Header />
      <Form />
      <Stays staysNum={staysdata.length} />
      <div>
        {staysdata.map((apartment) => {
          return <Apartment key={apartment.key} data={apartment} />;
        })}
      </div>
    </>
  );
};

export default App;
