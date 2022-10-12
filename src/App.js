import React, { useState, useEffect } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Loading from "./components/Loading";
import Header from "./components/Header";

const url = "https://restcountries.com/v3.1/all";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filtered = filteredCountries.filter((cap) => cap.capital !== name);
    setFilteredCountries(filtered);
  };
  const handleSearch = (searching) => {
    let value = searching.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
  };

  return (
    <div className="App">
      <p className="info">hrmrakibs@gmail.com</p>
      {loading && <Loading />}
      {error && <h2>{error.message}</h2>}
      <div className="layout">
        <Header onSearch={handleSearch} />
        {countries && (
          <Countries
            countries={filteredCountries}
            onRemoveCountry={handleRemoveCountry}
          />
        )}
      </div>
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from "react";

// import Countries from "./components/Countries";
// import "./App.css";

// const url = "https://restcountries.com/v3.1/all";

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [countries, setCountries] = useState([]);
//   const [filteredCountries, setFilteredCountries] = useState(countries);

//   const fetchData = async (url) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setCountries(data);
//       setFilteredCountries(data);
//       setIsLoading(false);
//       setError(null);
//     } catch (error) {
//       setIsLoading(false);
//       setError(error);
//     }
//   };

//   useEffect(() => {
//     fetchData(url);
//   }, []);

//   return (
//     <>
//       <h1>Country App</h1>

//       {isLoading && <h2>Loading...</h2>}
//       {error && <h2>{error.message}</h2>}
//       {countries && <Countries countries={filteredCountries} />}
//     </>
//   );
// };

// export default App;
