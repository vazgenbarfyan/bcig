import React, { useState, useEffect } from "react";
import './announcements.css';

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { fetchByCategory } from '../../../api/beneficiariesApi';
import ReactPaginate from "react-paginate";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Announcements = () => {
    const { i18n } = useTranslation();
    
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    const per_page = 20;

    const categories = {
      hy: 151,
      en: 149,
      ru: 366,
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
    }, [i18n.language, currentPage]);

    useEffect(() => {
        setIsLoading(true);
        setCurrentPage(0);
    }, [i18n.language]);

    return (
        <>
        {!data.length || isLoading  ? 
        <section className='news-section'>
            {Array.from(Array(20).keys()).map((i) => {
                return (
                    <Skeleton height='60vh' key={i * Math.random()} />
                )
            })}
        </section>
        :
        <section className='news-section'>
            {
                data.map((post)=>{
                    return(
                        <NavLink to={`/procurement/announcements/${post.slug}`} key={post.id}>
                            <div className="announcement">
                                <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                                <p className="annDesc" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                                <span className='readMore'>READ MORE »</span>
                                <p className="annDate">{post.date.slice(0, 10)}</p>
                            </div>
                        </NavLink>
                    )
                })
            }
        </section>
        }
        {totalCount <= 20 ? '' : 
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
        </>
    )
}

export default Announcements;