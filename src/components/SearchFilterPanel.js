import { useState } from 'react'
import { Filtration } from './Filtration'
import { RangeFiltration } from './RangeFiltration'
import { SearchPanel } from './SearchPanel'
import { Sorting } from './Sorting'

export const SearchFilterPanel = ({ filters,
    // filters: [country, brand, roast, type, available, label],
    label,
    available,
    search, filter, sorting, isAvailable, rangeFilters, handleRangeFilter, handleLabelFilter, limits, handleLimit }) => {
    // console.log(filters);
    const [checked, setCheked] = useState(available)
    const handleCheked = (e) => {
        setCheked(e.target.checked);
        isAvailable(e.target.checked);
    }
    return (
        <>
            <div className="d-flex flex-row flex-wrap my-4 justify-content-between align-items-center">
                <SearchPanel search={search} />
                <Sorting sorting={sorting} />
                <select className="form-select" aria-label="Elements per page" onChange={(e) => handleLimit(e.target.value)}
                    style={{ width: "70px" }}
                >
                    {limits.map(e => <option key={e} value={e}>{e}</option>)}
                </select>
            </div>
            <div className='filters my-4 gap-2 d-flex flex-row flex-wrap justify-content-evenly'>
                {/* <label htmlFor="filters">Filter by</label> */}
                {/* <div id="filters" className='d-flex flex-row justify-content-between flex-wrap gap-1'> */}

                {/* переделать под автоматическое заполнение */}

                {/* <div className='d-flex flex-row justify-content-center align-items-center'>
                        <input type="checkbox" className="form-check-input" name="btncheck" id="available" autoComplete="off"
                            onChange={(e) => isAvailable(e.target.checked)} aria-label={"available"}
                        />
                        <label className="form-check-label px-2" htmlFor={"available"}>{"available"}</label>
                    </div> */}
                {/* checkbox поменял на switch */}

                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={checked}
                        onChange={handleCheked} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">available</label>
                </div>

                {Object.entries(filters).map(([key, value]) => {
                    return !!value && <Filtration key={key} filter={filter} items={value} title={key} />
                })}
                {/* <Filtration filter={handleLabelFilter} items={label} title={'label'} /> */}

                <RangeFiltration cb={handleRangeFilter} title='acidity' rangValue={rangeFilters['acidity']} />
                <RangeFiltration cb={handleRangeFilter} title='density' rangValue={rangeFilters['density']} />
                {/* </div> */}
            </div>
        </>
    )
}
