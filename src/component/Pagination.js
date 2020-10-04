import React from 'react';
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <div className="pagination">
                {pageNumbers.map(number => {
                    if (number == 1) {
                        return (
                            < a onClick={() => paginate(number)} href='!#' key={number} id={number} className="active">
                                {number}
                            </a>)
                    }
                    else {
                        return (
                            < a onClick={() => paginate(number)} href='!#' key={number} id={number}>
                                {number}
                            </a>)
                    }
                })}
            </div>
        </nav >
    );
};

export default Pagination;