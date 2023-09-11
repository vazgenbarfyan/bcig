import React, { useState, useEffect } from "react";
import './beneficiaries.css';
import { useTranslation } from "react-i18next";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/system";
import { fetchByCategory } from "../../../api/beneficiariesApi";
import ReactLoading from "react-loading";
import ReactPaginate from "react-paginate";

const Beneficiaries = () => {

  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [benTables, setBenTables] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const per_page = 10;

  const categories = {
    hy: 360,
    en: 362,
    ru: 361,
  }
  
  const handlePageChange = (event) => {
    setCurrentPage(event.selected);
    window.scrollTo(0, 0);
    setIsLoading(true);
  };

  useEffect(() => {
    fetchByCategory(categories[i18n.language], currentPage+1, per_page)
    .then((data) => {
      setBenTables(data.data);
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
          benTables.map((benTable) => {
            return (
              <Accordion key={benTable.id} style={{ border: "1px solid #0080007d", backgroundColor: "rgb(90 254 156 / 14%)" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                    dangerouslySetInnerHTML={{__html: benTable.title.rendered}}
                />
                </AccordionSummary>
                <AccordionDetails>
                <div
                  dangerouslySetInnerHTML={{__html: benTable.content.rendered}}
                />
                <p>{t("beneficiariesPostUpdate")}<span dangerouslySetInnerHTML={{__html: benTable.modified.slice(0, 10)}} />{t("beneficiariesPostUpdate2")}</p>
                </AccordionDetails>
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

export default Beneficiaries;
