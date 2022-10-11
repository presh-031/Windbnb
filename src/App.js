import { useState } from "react";

import Stays from "./components/Stays";
import Header from "./components/Header";
import Form from "./components/Form";
import Apartment from "./components/Apartment";
import Footer from "./components/Footer";

import { staysdata } from "./data/staysdata";

const App = () => {
  const [availableStays, setAvailableStays] = useState(
    staysdata.map((apartment) => {
      return <Apartment key={apartment.key} data={apartment} />;
    })
  );

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
  }
  return (
    <>
      <div className="sm:items-center sm:max-w-[1100px] sm:mx-auto  sm:flex sm:justify-between sm:p-4">
        <Header />
        <Form getFilterData={getFilterData} />
      </div>
      <Stays staysNum={availableStays.length} />
      <div className="sm:grid max-w-[74.375rem] mx-auto sm:gap-[1rem] px-[2%]  sm:grid-cols-2 lg:grid-cols-3 ">
        {availableStays}
      </div>
      <Footer />
    </>
  );
};

export default App;
