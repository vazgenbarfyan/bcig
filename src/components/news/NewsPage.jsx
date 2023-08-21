import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import ReactLoading from "react-loading";

import NewsCard from "./NewsCard";
import "./news.css";

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handlePageChange = (event) => {
    setCurrentPage(event.selected);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(0);
    setQuery(searchInput);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://hn.algolia.com/api/v1/search?",
          {
            params: { page: currentPage, query },
          }
        );
        const { hits, nbPages } = data;
        setArticles(hits);
        setTotalPages(nbPages);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [currentPage, query]);

  return (
    <div className="container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          placeholder="Search for the news"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="news-container">
        {isLoading ? (
          <div className="loadingDiv">
            <ReactLoading type="spinningBubbles" color="green" />
          </div>
        ) : (
          <>
            {articles.map((article) => (
              <NewsCard article={article} key={article.objectID} />
            ))}
            <ReactPaginate
              nextLabel=">>"
              previousLabel="<<"
              breakLabel="..."
              forcePage={currentPage}
              pageCount={totalPages}
              renderOnZeroPageCount={null}
              onPageChange={handlePageChange}
              className="pagination"
              activeClassName="active-page"
              previousClassName="previous-page"
              nextClassName="next-page"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
