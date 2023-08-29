import React from 'react'

export const Sorting = ({ sorting }) => {
  const sortingType = ['title-asc', 'title-desc', 'price-asc', 'price-desc'];
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle bg-body text-dark border-1 border-light-subtle shadow" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="light">
        Sort by
      </button>
      <ul className="dropdown-menu">
        {/* <li><button className="dropdown-item d-flex flex-row justify-content-between align-align-items-center px-3" onClick={(e) => sorting(e.currentTarget.id)} id="title-asc"> <span className='px-2'>Name ascending</span> <i className="bi bi-arrow-up"></i></button></li>
        <li><button className="dropdown-item d-flex flex-row justify-content-between align-align-items-center px-3" onClick={(e) => sorting(e.currentTarget.id)} id="title-desc"> <span className='px-2'>Name descending</span> <i className="bi bi-arrow-down"></i></button></li>
        <li><button className="dropdown-item d-flex flex-row justify-content-between align-align-items-center px-3" onClick={(e) => sorting(e.currentTarget.id)} id="price-asc"> <span className='px-2'>Price ascending</span> <i className="bi bi-arrow-up"></i></button></li>
        <li><button className="dropdown-item d-flex flex-row justify-content-between align-align-items-center px-3" onClick={(e) => sorting(e.currentTarget.id)} id="price-desc"> <span className='px-2'>Price descending</span> <i className="bi bi-arrow-down"></i></button></li> */}
        {sortingType.map(type => {
          const [name, order] = type.split('-');
          return <li key={type}>
            <button className="dropdown-item d-flex flex-row justify-content-between align-align-items-center px-3"
              onClick={
                // (e) => sorting(e.currentTarget.id)
                // (e) => sorting(`_sort=${name}&_order=${order}`)
                (e) => sorting([name, order])
              }
              id={type}>
              <span className='px-2'>{name[0].toUpperCase() + name.slice(1)} {order.toUpperCase()}</span><i className={`bi bi-arrow-${order === 'asc' ? 'up' : 'down'}`}></i></button></li>
        })}
      </ul>
    </div>
  )
}
