import React, { useState } from 'react'
import { ProductCard } from './ProductCard';

export const Carousel = ({ products = [] }) => {
    console.log(products);
    const [active, setActive] = useState(0);
    return (
        <div id="carousel" className="carousel slide carousel-dark"
        // data-bs-theme="dark"
        >
            {/* <div className="carousel-inner justify-content-center d-flex"> */}

            <div className="carousel-inner">
                {products.map((product, i) => {
                    let className = 'carousel-item ';
                    return (<div
                        className={active === i ? className + ' active' : className}
                        // className={className}
                        key={i}
                    >
                        <ProductCard {...product} />
                    </div>)
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
