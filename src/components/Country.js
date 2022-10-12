import React from "react";
import cls from "../styles/Country.module.css";

const Country = (props) => {
  // const { country } = props;
  const { name, flags, capital, continents, population, area } = props.country;

  const removeCountry = (capital) => {
    props.onRemoveCountry(capital);
  };
  return (
    <div className={cls.country}>
      <div className={cls.flag}>
        <img src={flags.png} alt={name.common} />
      </div>
      <h2>
        Country:{" "}
        {name.common.length > 12 ? name.common.slice(0, 9) : name.common}
      </h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Continents: {continents}</p>
      <div className={cls.flex}>
        <p>Area: {area}</p>
        <button
          onClick={() => {
            removeCountry(capital);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Country;
