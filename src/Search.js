import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  return (
    <div className="search">
      <div className="search-container">
        <form className="search__form">
          <label for="where"></label>
          <SearchIcon color="disabled" />
          <input type="text" id="where" placeholder="Dove vuoi andare?" />
        </form>
      </div>
    </div>
  );
};

export default Search;
