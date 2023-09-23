import React, { useState, useEffect } from "react";
import './capacityAssessment.css';
import { useTranslation } from "react-i18next";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { fetchByCategory } from "../../../api/beneficiariesApi";
import ReactLoading from "react-loading";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";

const CapacityAssessment = () => {

  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const per_page = 10;

  const categories = {
    hy: 370,
    en: 371,
    ru: 372,
  }
  
  const handlePageChange = (event) => {
    setCurrentPage(event.selected);
    window.scrollTo(0, 0);
    setIsLoading(true);
  };

  useEffect(() => {
    fetchByCategory(categories[i18n.language], currentPage+1, per_page)
    .then((data) => {
      setData(data.data);
        setTotalCount(data.totalCount);
    })
    .catch(() => console.log("turn on server"))
    .finally(() => setIsLoading(false));
  }, [i18n.language, currentPage])

  useEffect(() => {
    setIsLoading(true);
    setCurrentPage(0);
  }, [i18n.language]);

  return (
    <Container>
        {isLoading ?
          <div className="loadingDiv">
            <ReactLoading type="spinningBubbles" color="green" />
          </div>
        :
          data.map((item) => {
            return (
              <NavLink to={`/achievements/capacity-assessment/${item.slug}`} key={item.id} className='capacityLink'>
                <div key={item.id} className='capacityBlock'>
                  <Typography
                    dangerouslySetInnerHTML={{__html: item.title.rendered}}
                  />
                  <span>{item.date.slice(0, 10)}</span>
                </div>
              </NavLink>
            );
          })
        }
        {totalCount <= 10 ? '' : 
          <ReactPaginate
              nextLabel=">>"
              previousLabel="<<"
              breakLabel="..."
              forcePage={currentPage}
              pageCount={totalCount / per_page}
              renderOnZeroPageCount={null}
              onPageChange={handlePageChange}
              className="pagination"
              activeClassName="active-page"
              previousClassName="previous-page"
              nextClassName="next-page"
          />
        }
      </Container>
  );
};

export default CapacityAssessment;
