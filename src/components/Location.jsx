import { IconSearch } from "@tabler/icons-react";
import "./location.css";
import axios from "axios";

const Location = ({ location, setLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const idLocation = e.target.idLocation.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };

  return (
    <section className="location">
      <header className="header_location">
        <img
          className="header_img"
          src="../public/img/nombreoriginal.png "
          alt=""
        />
        <form onSubmit={handleSubmit} className="button_container">
          <input
            placeholder="Type Number of New Location..."
            name="idLocation"
            className="input_button"
            type="number"
          />
          <button className="search_button" type="submit">
            Search <IconSearch size={18} />
          </button>
        </form>
      </header>
      <section className="info-location">
        <h3> Welcome to {location?.name} </h3>
        <ul>
          <li>Type: {location?.type} </li>
          <li>Dimension: {location?.dimension} </li>
          <li>Population: {location?.residents.length} </li>
        </ul>
      </section>
    </section>
  );
};
export default Location;
