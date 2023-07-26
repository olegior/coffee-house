import { useContext } from 'react'
import { Description } from './Description'
import { About } from './About'
import { ModalContext } from '../App'

export const Modal = () => {
    const [modalContent] = useContext(ModalContext);
    const { title, country, price, img, description,
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
        // ...other
    } = modalContent
    return (
        <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-scrollable">
                <div className="modal-content px-2">
                    {/* <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div> */}
                    <div className="modal-body py-0">
                        <Description img={img} modal>
                            <About title={title} modal>
                                <p><span className='fw-bold fst-italic'>Country:</span> {country}</p>
                                <p><span className='fw-bold fst-italic'>Description:</span> {description}</p>
                                <p><span className='fw-bold fst-italic'>Price:</span> {price}$</p>
                                <p><span className='overflow-auto'>{[acidity,
                                    available,
                                    brand,
                                    category,
                                    density,
                                    id,
                                    label,
                                    quantity,
                                    roastDegree,
                                    //sizes,
                                    taste,
                                    type,
                                    ].join(" ; ")}</span></p>
                            </About>
                        </Description>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
