import { Filtration } from './Filtration'
import { Sorting } from './Sorting'

export const SearchFilterPanel = ({ filters: [countries, brands], search, filter, sorting }) => {
    return (
        <div className="d-flex flex-row flex-wrap my-5 justify-content-between align-items-center">
            <Sorting sorting={sorting} />

            <div className="my-2 d-flex flex-row form-group justify-content-between">
                <label htmlFor="inputSearch" className='col-form-label text-nowrap'>Looking for</label>
                <input className="form-control shadow" placeholder='type coffee title...' id="inputSearch" type="text" aria-label="search input" onChange={(e) => search(e.target.value)} />
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <label htmlFor="filters">Filter by</label>
                <div id="filters" className='d-flex flex-row justify-content-between'>
                    <Filtration filter={filter} items={brands} title={'brands'} />
                    <Filtration filter={filter} items={countries} title={'countries'} />
                </div>
            </div>
        </div>
    )
}
