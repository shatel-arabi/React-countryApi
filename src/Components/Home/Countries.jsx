import React, { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  console.log(countries);

  return (
    <div className="m-5">
      <h3 className="text-center p-3">Explore the world</h3>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {countries.map((country) => (
          <Country key={country.name} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
