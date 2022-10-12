import React, { useEffect, useState } from "react";

import cls from "../styles/Header.module.css";

const Header = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]);

  return (
    <div className={cls.header}>
      <h1>Country App - React</h1>
      <div className={cls.search}>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          value={searchText}
          onChange={handleChange}
        />
        <button className="btn btn-primary disabled">Search</button>
      </div>
    </div>
  );
};

export default Header;
