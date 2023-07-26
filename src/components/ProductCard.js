import { useContext } from 'react'
import { ModalContext } from '../App'

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
    return (
        <div className="card shadow p-4 product-card w-100 h-100" style={{ maxWidth: '240px', maxHeight: '330px' }}
            data-bs-toggle="modal"
            data-bs-target="#modal"
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
            <img src={`assets/content/${img}.jpg`} className="card-img-top img-fluid" alt={title} style={{ height: '170px' }} />
            <div className="card-body px-0 pb-0">
                <p className="card-title text-end">{title}</p>
                <p className="card-text text-end">{country}</p>
                <p className="card-text text-end fw-bold">{price}$</p>
            </div>
        </div>
    )
}
