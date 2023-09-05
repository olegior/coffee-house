import React from 'react'
import { ProductCard } from './ProductCard';

export const Carousel = ({ products = [] }) => {
    console.log(products);
    return (
        <div id="carousel" className="carousel slide carousel-dark"
            // data-bs-theme="dark"
            data-bs-ride="true"
        >
            {/* <div className="carousel-inner justify-content-center d-flex"> */}

            <div className="carousel-inner">
                {products.map((product, i) => {
                    let className = 'carousel-item ';
                    return (<div
                        className={i === 0 ? className + ' active' : className}
                        // className={className}
                        key={i}
                    >
                        {/* <CarouselProduct {...product} /> */}
                        <ProductCard {...product} full />

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
