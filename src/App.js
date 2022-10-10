import { useState } from "react";
// import axios from "axios";

import Stays from "./components/Stays";
import Header from "./components/Header";
import Form from "./components/Form";
import Apartment from "./components/Apartment";

import { staysdata } from "./data/staysdata";

const App = () => {
  const [availableStays, setAvailableStays] = useState(
    staysdata.map((apartment) => {
      return <Apartment key={apartment.key} data={apartment} />;
    })
  );

  function getFilterData(location, guests) {
    let filteredData;
    if (location === null) {
      filteredData = staysdata.filter((stay) => {
        return stay.maxGuests >= guests;
      });
    } else {
      filteredData = staysdata.filter((stay) => {
        return stay.maxGuests >= guests && location === `${stay.city}, ${stay.country}`;
      });
    }
    setAvailableStays(
      filteredData.map((apartment) => {
        return <Apartment key={apartment.key} data={apartment} />;
      })
    );

    // const filteredData = staysdata.filter((stay) => {
    //   return stay.maxGuests >= guests && location === `${stay.city}, ${stay.country}`;
    // });

    // setAvailableStays(
    //   filteredData.map((apartment) => {
    //     return <Apartment key={apartment.key} data={apartment} />;
    //   })
    // );
  }
  return (
    <>
      <Header />
      <Form getFilterData={getFilterData} />
      <Stays staysNum={staysdata.length} />
      <div>{availableStays}</div>
    </>
  );
};

export default App;
