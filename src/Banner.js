import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";

const Banner = () => {
  const history = useHistory();
  // const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__info">
        <Search />
        <h1>Riscopri l'Italia</h1>
        <h5>Viaggia in modo diverso, scopri i tesori nascosti vicino a te.</h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Esplora i dintorni
        </Button>
      </div>
    </div>
  );
};

export default Banner;
