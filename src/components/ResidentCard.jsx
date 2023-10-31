import axios from "axios";
import { useEffect, useState } from "react";
import "./residentCard.css";

const ResidentCard = ({ residentEndPoint }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    axios
      .get(residentEndPoint)
      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="card_container">
      <header className="header_image">
        <img className="img" src={resident?.image} alt="" />
      </header>
      <section className="resident-frame">
        <div className="resident_info">
          <h4 className="resident-name">{resident?.name} </h4>
          <ul className="resident-ul">
            <li>Species: {resident?.species} </li>
            <li>Origin: {resident?.origin.name}</li>
            <li>Times appear: {resident?.episode.length}</li>
          </ul>
          <span>{resident?.status} </span>
        </div>
      </section>
    </article>
  );
};
export default ResidentCard;
