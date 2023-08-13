import { Filtration } from './Filtration'
import { RangeFiltration } from './RangeFiltration'
import { Sorting } from './Sorting'

export const SearchFilterPanel = ({ filters, filters: [countries, brands, roast, type, available, label], 
    search, filter, sorting, isAvailable, rangeFilters, handleRangeFilter, handleLabelFilter }) => {
    // console.log(label);
    return (
        <>
            <div className="d-flex flex-row flex-wrap my-4 justify-content-between align-items-center">
                <Sorting sorting={sorting} />

                <div className="my-2 d-flex flex-row form-group justify-content-between">
                    <label htmlFor="inputSearch" className='col-form-label text-nowrap'>Looking for</label>
                    <input className="form-control shadow" placeholder='type coffee title...' id="inputSearch" type="text" aria-label="search input" onChange={(e) => search(e.target.value)} />
                </div>
            </div>
            <div className='filters my-4 gap-2 d-flex flex-row justify-content-center align-items-center'>
                <label htmlFor="filters">Filter by</label>
                <div id="filters" className='d-flex flex-row justify-content-between flex-wrap gap-1'>
                    {/* переделать под автоматическое заполнение */}

                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <input type="checkbox" className="form-check-input" name="btncheck" id={"available"} autoComplete="off"
                            onChange={(e) => isAvailable(e.target.checked)} aria-label={"available"}
                        />
                        <label className="form-check-label px-2" htmlFor={"available"}>{"available"}</label>
                    </div>
                    <Filtration filter={filter} items={brands} title={'brand'} />
                    <Filtration filter={filter} items={countries} title={'country'} />
                    <Filtration filter={filter} items={roast} title={'roast'} />
                    <Filtration filter={filter} items={type} title={'type'} />
                    <Filtration filter={handleLabelFilter} items={label} title={'label'} />

                    <RangeFiltration cb={handleRangeFilter} title='acidity' rangValue={rangeFilters['acidity']} />
                    <RangeFiltration cb={handleRangeFilter} title='density' rangValue={rangeFilters['density']} />
                </div>
            </div>
        </>
    )
}
