import React from "react";
import { Link } from "react-router-dom";
import GLOBAL from "../../Utils/Global";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__left">
        <div className="home__left__subtitle">{GLOBAL.HOME.HUNGRY}</div>
        <div className="home__left__title">{GLOBAL.HOME.LETS_EAT}</div>
      </div>
      <div className="home__right">
        <Link to="/findRestaurants">
          <ButtonCustom
            description={GLOBAL.HOME.BUTTON}
            className="home__right__button"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
