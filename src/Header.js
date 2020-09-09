import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__left">
          <img
            className="header__icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt=""
          />
        </div>
      </Link>

      <div className="header__center">
        <div className="header__center-first-row">
          <p>Alloggi</p>
          <p>Esperienze</p>
          <p>Esperienze Online</p>
        </div>
        <div className="header__center-second-row">
          <div className="header__form">
            <form className="header__form-where">
              <label for="where">Dove</label>
              <input type="text" id="where" placeholder="Dove vuoi andare?" />
            </form>
            <form className="header__form-checkin">
              <label for="checkin">Check-in</label>
              <input type="number" id="checkin" placeholder="Aggiungi date" />
            </form>
            <form className="header__form-checkout">
              <label for="checkout">Check-out</label>
              <input type="number" id="checkout" placeholder="Aggiungi date" />
            </form>
            <form className="header__form-guests">
              <label for="guests">Ospiti</label>
              <input type="number" id="guests" placeholder="Aggiungi ospiti" />
            </form>
            <div className="header__form-search">
              <button>
                <SearchIcon color="disabled" />
              </button>
            </div>
          </div>
        </div>

        {/* <input type="text" />
        <SearchIcon /> */}
      </div>

      <div className="header__right">
        <p>Diventa un host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
