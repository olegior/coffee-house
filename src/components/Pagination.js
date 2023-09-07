import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Pagination = ({ qty, page, setPage }) => {
    const [activePage, setActivePage] = useState(page);

    useEffect(() => {
        setActivePage(page);
    }, [page])

    // const handlePageChanging = (e) => {
    //     setPage(+e.target.dataset.value);
    //     setActivePage(+e.target.dataset.value);
    // }

    const pages = new Array(qty).fill('').map((e, i) =>
        <li className={`page-item ${activePage === i + 1 ? 'active' : ''}`} key={i + 1}>
            <Link className="page-link"
                data-value={i + 1}
                onClick={(e) => {
                    setActivePage(+e.target.dataset.value);
                    setPage(+e.target.dataset.value);
                }}>
                {/* onClick={handlePageChanging}> */}
                {i + 1}
            </Link>
        </li>)

    return (
        <nav className='mt-5' aria-label="Page navigation">
            <ul className="pagination justify-content-center d-flex flex-wrap">
                <li className={`page-item ${activePage === 1 ? 'disabled' : ''}`}
                    key='prev'>
                    <Link className="page-link"
                        onClick={() => {
                            if (activePage > 1) {
                                setActivePage(prev => prev - 1);
                                setPage(prev => prev - 1);
                            }
                        }}
                        aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </Link>
                </li>
                {pages}
                <li className={`page-item ${activePage === qty ? 'disabled' : ''}`} key='next'>

                    <Link className="page-link"
                        onClick={() => {
                            if (activePage < qty) {
                                setActivePage(prev => prev + 1);
                                setPage(prev => prev + 1);
                            }
                        }}
                        aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
