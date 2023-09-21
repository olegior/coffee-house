import { useState } from 'react'
import { Filtration } from './Filtration'
import { RangeFiltration } from './RangeFiltration'
import { SearchPanel } from './SearchPanel'
import { Sorting } from './Sorting'
// import { Link } from 'react-router-dom'

export const SearchFilterPanel = ({ filters,
    // filters: [country, brand, roast, type, available, label],
    label,
    available,
    search, filter, sorting, isAvailable, rangeFilters, handleRangeFilter, handleLabelFilter, limits, handleLimit, searchReq, isFiltred }) => {
    // console.log(filters);
    const [checked, setCheked] = useState(available)
    const handleCheked = (e) => {
        setCheked(e.target.checked);
        isAvailable(e.target.checked);
    }
    return (
        <>
            <div className="d-flex flex-row flex-wrap my-4 justify-content-between align-items-center">
                <Sorting sorting={sorting} />
                <SearchPanel search={search} searchReq={searchReq} />

                <select className="form-select" aria-label="Elements per page" onChange={(e) => handleLimit(e.target.value)}
                    style={{ width: "70px" }}
                >
                    {limits.map(e => <option key={e} value={e}>{e}</option>)}
                </select>


                {/* {isFiltred && <Link onClick={()=>{
                    // setRangeFilters
                }}>clear all filters</Link>} */}
            </div>
            <div className='filters my-4 gap-2 d-flex flex-row flex-wrap justify-content-between align-items-center'>
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

                <div className="form-check form-switch pt-2"
                    style={{ minWidth: '120px' }}
                >
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={checked}
                        onChange={handleCheked} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">available</label>
                </div>

                {
                    Object.entries(filters).map(([key, value]) => {
                        return !!value && <Filtration key={key} filter={filter} items={value} title={key} />
                    })
                }
                {/* <Filtration filter={handleLabelFilter} items={label} title={'label'} /> */}

                <RangeFiltration key='acidity' cb={handleRangeFilter} title='acidity' rangValue={rangeFilters['acidity']} />
                <RangeFiltration key='density' cb={handleRangeFilter} title='density' rangValue={rangeFilters['density']} />
                {/* </div> */}
            </div>
        </>
    )
}
