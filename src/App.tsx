import Home from "./Containers/Home/Home";
import { Routes, Route } from "react-router-dom";
import FindRestaurants from "./Containers/FindRestaurants/FindRestaurants";
import { LoadScript } from "@react-google-maps/api";
import RestaurantView from "./Containers/RestaurantView/RestaurantView";
import Header from "./Components/Header/Header";

function App() {
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY!}
      libraries={["places"]}
    >
      <div className="app">
        <Header />
        <div className="app__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/findRestaurants" element={<FindRestaurants />} />
            <Route path="/restaurant/:id" element={<RestaurantView />} />
          </Routes>
        </div>
      </div>
    </LoadScript>
  );
}

export default App;
