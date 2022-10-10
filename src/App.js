import { useState } from "react";

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
  // const [filteredData, setFilteredData] = useState([]);

  let filteredData = [];
  function getFilterData(location, guests) {
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
    console.log(availableStays);
  }
  console.log(availableStays);
  return (
    <>
      <Header />
      <Form getFilterData={getFilterData} />
      <Stays staysNum={availableStays.length} />
      <div>{availableStays}</div>
    </>
  );
};

export default App;
