import React from "react";

const Country = ({ country }) => {
  console.log(country);
  const { name, population, flags, region, capital } = country;

  return (
    <div className="col">
      <div className="card" >
        <img src={flags.png} className="card-img-top" style={{height:"250px"}} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name: {name.common}</h5>
          <p className="card-text">
            Capital: {capital}
          </p>
          <p className="card-text"> {region} </p>
          <a href="#" className="btn btn-primary">
            See details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Country;

      