import { Filtration } from './Filtration'
import { RangeFiltration } from './RangeFiltration'
import { SearchPanel } from './SearchPanel'
import { Sorting } from './Sorting'

export const SearchFilterPanel = ({ filters, filters: [countries, brands, roast, type, available, label],
    search, filter, sorting, isAvailable, rangeFilters, handleRangeFilter, handleLabelFilter, limits, handleLimit }) => {
    // console.log(label);
    return (
        <>
            <div className="d-flex flex-row flex-wrap my-4 justify-content-between align-items-center">
                <Sorting sorting={sorting}/>
                <SearchPanel search={search}/>
                <select className="form-select" aria-label="Elements per page" onChange={(e) => handleLimit(e.target.value)}
                    style={{ width: "100px" }}
                >
                    {limits.map(e => <option key={e} value={e}>{e}</option>)}
                </select>
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
