import { useContext } from 'react'
import { Description } from './Description'
import { About } from './About'
import { ModalContext } from '../App'

export const Modal = () => {
    const [modalContent] = useContext(ModalContext);
    const { title,
        img, description, acidity,
        // available, brand, category,  id, quantity, roastDegree, sizes, taste, type, country, price, 
        density, label,
        // ...other
    } = modalContent;
    const cardItems = ['country', 'brand', 'price', 'category', 'roastDegree', 'taste', 'type',];
    return (
        <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-scrollable">
                <div className="modal-content px-2">
                    {/* <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div> */}
                    <div className="modal-body py-0">
                        <Description img={img} modal
                            label={label}
                        >
                            <About title={title} modal>
                                {cardItems.map((e, id) => {
                                    return (
                                        <p className='lh-1' key={id}>
                                            <span className='fw-bold fst-italic'> {e[0].toUpperCase() + e.slice(1)}: </span>
                                            {Array.isArray(modalContent[e]) ? modalContent[e].join(', ') : modalContent[e]}
                                            {e === 'price' && '$'}
                                        </p>
                                    )
                                })}
                                <p className='lh-1'> <span className='fw-bold fst-italic'>Acidity: </span>{acidity}/5 </p>
                                <p className='lh-1'> <span className='fw-bold fst-italic'>Density: </span>{density}/5 </p>
                            </About>

                        </Description>
                        <p><span className='fw-bold fst-italic'>Description:</span> {description}</p>
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
