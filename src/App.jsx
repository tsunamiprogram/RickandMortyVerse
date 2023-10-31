import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";
import { getRandomNumber } from "./utils/random";

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main_container">
      <Location
        className="main-location"
        location={location}
        setLocation={setLocation}
      />
      <ResidentList
        className="main-residentList"
        residents={location?.residents ?? []}
      />
    </main>
  );
}

export default App;
