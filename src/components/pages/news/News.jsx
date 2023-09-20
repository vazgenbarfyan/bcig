import React, { useState, useEffect } from "react";
import './news.css';

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { fetchNews } from "../../../api/newsApi";
import ReactPaginate from "react-paginate";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const News = () => {
    const { i18n } = useTranslation();
    
    const [isLoading, setIsLoading] = useState(true);
    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    const per_page = 20;

    const handlePageChange = (event) => {
        setCurrentPage(event.selected);
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(true);

        fetchNews(i18n.language, currentPage+1, per_page)
            .then((data) => {
                setNewsData(data.data);
                setTotalCount(data.totalCount);
            })
            .catch(() => console.log("turn on server"))
            .finally(() => setIsLoading(false));
    }, [i18n.language, currentPage]);

    useEffect(() => {
        setIsLoading(true);
        setCurrentPage(0);
    }, [i18n.language]);

    return (
        <>
        {!newsData.length || isLoading  ? 
        <section className='news-section'>
            {Array.from(Array(20).keys()).map(() => {
                return (
                    <Skeleton height='40vh' />
                )
            })}
        </section>
        :
        <section className='news-section'>
            {newsData.map((news) => {
                return (
                    <NavLink to={`/news/news/${news.slug}`} key={news.id}>
                        <div className='news-item-card' style={{backgroundImage: `url(${news._embedded["wp:featuredmedia"] ? news._embedded["wp:featuredmedia"][0].source_url : "https://phoenixtour.org/wp-content/uploads/2021/04/08-ARMENIAN-NATURE.jpg"})`}}> 
                            <div className='news-card-content'>
                                <h3 dangerouslySetInnerHTML={{__html: news.title.rendered}} />
                                <p>{news.date.slice(0, 10)}</p>
                            </div>
                        </div>
                    </NavLink>
                )
            })}
        </section>
        }
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
        </>
    )
}

export default News;