import { useContext } from 'react'
import { ModalContext } from '../App'
import { Badges } from './Badges';

export const ProductCard = ({ title, country, price, description, img,
    acidity,
    available,
    brand,
    category,
    density,
    id,
    label,
    quantity,
    roast,
    sizes,
    taste,
    type,
    full
}) => {
    const [, setModalContent] = useContext(ModalContext);
    const cardClasses = `card shadow p-3 product-card w-100 h-100 ${full && 'flex-row mx-auto full-product-card'} ${!available && 'bg-dark bg-opacity-25'}`; // 
    const cardStyle = !full ? { maxWidth: '240px', maxHeight: '360px' } : { maxWidth: '75%' };
    const imgStyle = {
        height: full ? '400px' : '170px',
        filter: !available && 'grayscale(100%)',
        maxWidth: full ? '50%' : '100%',
        objectFit: full ? 'scale-down' : 'fill'
    }

    return (
        <>
            {/* вынести выше */}
            <div className={cardClasses} style={cardStyle}
                data-bs-toggle="modal"
                data-bs-target="#modal"
                // Делегировать клик
                onClick={() => setModalContent({
                    title, country, description, img, price, acidity,
                    available,
                    brand,
                    category,
                    density,
                    id,
                    label,
                    quantity,
                    roast,
                    sizes,
                    taste,
                    type,
                })}
            >
                {/* {available && <Badges label={label} />} */}
                <Badges label={label} />
                <img src={`assets/content/${img}.jpg`} className="card-img-top img-fluid " alt={title}
                    style={imgStyle} />
                <div className="card-body px-0 pb-0">
                    {/* <p className="card-title text-end">{id}</p> */}
                    <p className="card-title text-end fw-bold">{title}</p>
                    {!full && <>
                        <p className="card-text text-end">{country}</p>
                        <p className="card-text text-end">{brand}</p>
                    </>}

                    {full && < p className="card-text text-end product-description">{description}</p>}
                    <p className="card-text text-end fw-bold">{price}$</p>
                </div>
            </div>


        </>
    )
}
