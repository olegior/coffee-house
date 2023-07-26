import React from 'react'

export const Sorting = ({sorting}) => {
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle bg-body text-dark border-1 border-light-subtle shadow" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="light">
        Sort by
      </button>
      <ul className="dropdown-menu">
        <li><button className="dropdown-item d-flex flex-row justify-content-between align-align-items-center px-3" onClick={(e)=>sorting(e.currentTarget.id)} id="title-up"> <span className='px-2'>Name ascending</span> <i className="bi bi-arrow-up"></i></button></li>
        <li><button className="dropdown-item d-flex flex-row justify-content-between align-align-items-center px-3" onClick={(e)=>sorting(e.currentTarget.id)} id="title-down"> <span className='px-2'>Name descending</span> <i className="bi bi-arrow-down"></i></button></li>
        <li><button className="dropdown-item d-flex flex-row justify-content-between align-align-items-center px-3" onClick={(e)=>sorting(e.currentTarget.id)} id="price-up"> <span className='px-2'>Price ascending</span> <i className="bi bi-arrow-up"></i></button></li>
        <li><button className="dropdown-item d-flex flex-row justify-content-between align-align-items-center px-3" onClick={(e)=>sorting(e.currentTarget.id)} id="price-down"> <span className='px-2'>Price descending</span> <i className="bi bi-arrow-down"></i></button></li>
      </ul>
    </div>
  )
}
