import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import "./residentList.css";
import paginationLogic from "../utils/pagination";

const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const{pages, residentsInPage} = paginationLogic(currentPage, residents);
  useEffect(() => {
    setCurrentPage(1)
  },[residents])

  return (
    <section>
    <section className="main_card_container">
      {residentsInPage.map((resident) => (
        <ResidentCard key={resident} residentEndPoint={resident} />
      ))}
    </section>
      {/* {paginacion} */}
      <ul className="ul-pages">
        {
          pages.map((page) => (
            <li key={page}>
              <button className={`button-pagination ${page === currentPage && "active"}`} onClick={() => setCurrentPage(page)}>
                {page}
              </button>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default ResidentList;
