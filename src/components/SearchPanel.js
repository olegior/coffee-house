import React from 'react'

export const SearchPanel = ({ search }) => {
    return (
        <div className="my-2 d-flex flex-row form-group justify-content-between">
            <label htmlFor="inputSearch" className='col-form-label text-nowrap'>Looking for</label>
            <input className="form-control shadow" placeholder='type coffee title...' id="inputSearch" type="text" aria-label="search input" onInput={(e) => search(e.target.value)} />
        </div>
    )
}
