import React from 'react'
import { ProductCard } from './ProductCard';

export const Carousel = ({ products }) => {
    // const carit = []
    // console.log(products);
    // for (let i = 0; i < Math.ceil(products.length / 4); i++) {
    //     carit.push(
    //         <div
    //             className={i === 0 ? "active carousel-item" : "carousel-item"}
    //             key={i}
    //         >
    //             <div className='d-flex flex-row justify-content-evenly'>
    //                 <ProductCard {...products[i * 3 + 0]}></ProductCard>
    //                 <ProductCard {...products[i * 3 + 1]}></ProductCard>
    //                 <ProductCard {...products[i * 3 + 2]}></ProductCard>
    //             </div>

    //         </div>
    //     )
    // }
    return (
        <div id="carousel" className="carousel slide carousel-dark" >
            {/* <div className="carousel-indicators">
                {products.map((product, id) => {
                    return (
                        <button type="button" data-bs-target="#carousel"
                            key={id}
                            data-bs-slide-to={id} className={id === 0 ? "active" : ""} aria-current={id === 0 && true}
                            aria-label={`Slide ${id + 1}`}></button>)
                })}
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> */}
            <div className="carousel-inner"
            // style={{overflow: 'auto'}}
            >
                {/* {carit} */}
                {products.map((product, i) => {
                    return (<div
                        className={i === 0 ? "active carousel-item" : "carousel-item"} key={i} 
                        >
                        <ProductCard {...product} />

                    </div>)
                })}
                {/* <div className="carousel-item active">
                    <img src="assets/content/aromistico.jpg" className="d-block w-100" alt="..." / />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="assets/content/presto.jpg" className="d-block w-100" alt="..." / />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="assets/content/solimo.jpg" className="d-block w-100" alt="..." / />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div> */}
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
