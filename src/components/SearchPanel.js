import React, { useState } from 'react'

export const SearchPanel = ({ search, searchReq }) => {
    const [searchingText, setSearchingText] = useState(searchReq);
    const handleSearchingText = (value) => {
        search(value);
        setSearchingText(value);
    }
    return (
        <div className="my-2 d-flex flex-row form-group justify-content-between">
            {/* <label htmlFor="inputSearch" className='col-form-label text-nowrap'>Looking for</label> */}
            <input className="form-control shadow" placeholder='type coffee title...'
                id="inputSearch" type="text" aria-label="search input" onInput={(e) => handleSearchingText(e.target.value)} value={searchingText} />
            {searchingText && <button className="btn search-button pt-3 btn-close" type="button" id="button-addon" onClick={() => handleSearchingText('')}></button>}
        </div>
    )
}
