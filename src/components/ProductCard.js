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
    roastDegree,
    sizes,
    taste,
    type,
}) => {
    const [, setModalContent] = useContext(ModalContext);
    const classes = `card shadow p-3 product-card w-100 h-100 ${!available && 'bg-dark bg-opacity-25'}`;


    return (
        <div className={classes} style={{ maxWidth: '240px', maxHeight: '360px' }}
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
                roastDegree,
                sizes,
                taste,
                type,
            })}
        >
            {/* {available && <Badges label={label} />} */}
            <Badges label={label} />
            <img src={`assets/content/${img}.jpg`} className="card-img-top img-fluid" alt={title}
                style={
                    !available ? { height: '170px', filter: 'grayscale(100%)' } : { height: '170px' }
                } />
            <div className="card-body px-0 pb-0">
                <p className="card-title text-end">{id}</p>
                <p className="card-title text-end">{title}</p>
                <p className="card-text text-end">{country}</p>
                <p className="card-text text-end">{brand}</p>
                <p className="card-text text-end fw-bold">{price}$</p>
            </div>
        </div>
    )
}
