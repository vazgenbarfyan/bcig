import React, { useState, useEffect } from "react";
import './mediaGallery.css';

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { fetchByCategory } from '../../../api/beneficiariesApi';
import ReactPaginate from "react-paginate";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MediaGallery = () => {
    const { i18n } = useTranslation();
    
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    const per_page = 20;

    const categories = {
      hy: 367,
      en: 368,
      ru: 369,
    }

    const handlePageChange = (event) => {
        setCurrentPage(event.selected);
        window.scrollTo(0, 0);
        setIsLoading(true);
    };
    useEffect(() => {
        fetchByCategory(categories[i18n.language], currentPage+1, per_page, true)
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
                        <NavLink to={`/news/media-gallery/${post.slug}`} key={post.id}>
                            <div className="mediaGallery">
                                <div className="mediaPicture" style={{backgroundImage: `url(${post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"][0].source_url : "https://phoenixtour.org/wp-content/uploads/2021/04/08-ARMENIAN-NATURE.jpg"})`}}></div>
                                <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                                <p className="mediaDesc" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                                <p className="mediaDate">{post.date.slice(0, 10)}</p>
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

export default MediaGallery;