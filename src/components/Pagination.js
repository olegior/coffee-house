import React from 'react';
import { Link } from 'react-router-dom';

export const Pagination = ({ qty, page, setPage }) => {
    // console.log(window.innerWidth)
    const pages = [];
    for (let i = 0; i < qty; i++) {
        const className = 'page-item';
        pages.push(
            <li className={className} key={i + 1}>
                <Link className="page-link"
                    data-value={i + 1}
                    onClick={(e) => setPage(e.target.dataset.value)}>
                    {i + 1}
                </Link>
            </li>)
    }
    return (
        <nav className='mt-5' aria-label="Page navigation">
            <ul className="pagination justify-content-center d-flex flex-wrap">
                <li className="page-item">
                    <Link className="page-link" to="/page=1" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </Link>
                </li>
                {pages}
                <li className="page-item">
                    <Link className="page-link" to="/page=2" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
