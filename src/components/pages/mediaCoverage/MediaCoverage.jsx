import React, { useState, useEffect } from "react";
import './mediaCoverage.css';
import { useTranslation } from "react-i18next";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { fetchByCategory } from "../../../api/beneficiariesApi";
import ReactLoading from "react-loading";
import ReactPaginate from "react-paginate";

const MediaCoverage = () => {

  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [mediaData, setMediaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const per_page = 10;

  const categories = {
    hy: 364,
    en: 363,
    ru: 365,
  }
  
  const handlePageChange = (event) => {
    setCurrentPage(event.selected);
    window.scrollTo(0, 0);
    setIsLoading(true);
  };

  useEffect(() => {
    fetchByCategory(categories[i18n.language], currentPage+1, per_page)
    .then((data) => {
      setMediaData(data.data);
        console.log(data,'data')
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
          mediaData.map((mediaItem) => {
            return (
              <Accordion key={mediaItem.id} style={{ marginBottom: 5, padding: "12px", border: "1px solid #0080007d", backgroundColor: "rgb(90 254 156 / 14%)" }}>
                <a href={mediaItem.excerpt.rendered.replace(/<p>|<\/p>|\n/g, '')} target="_blank" style={{color: "rgb(60, 168, 71)"}}>
                  <Typography
                    dangerouslySetInnerHTML={{__html: mediaItem.title.rendered}}
                  />
                </a>
              </Accordion>
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

export default MediaCoverage;
