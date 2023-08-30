import { useState, useEffect, useMemo } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
// import { Description } from '../components/Description'
// import { About } from '../components/About'
import { Products } from '../components/Products'
import { SearchFilterPanel } from '../components/SearchFilterPanel'

import getProducts from '../utils/getProducts'
import { Pagination } from '../components/Pagination'

export const OurCoffe = () => {

    // кол-во продуктов, из запроса
    const [totalCount, setTotalCount] = useState(0);
    const LIMITS = [15, 25, 50]; // 10,16,25
    const [visibleProducts, setVisibleProducts] = useState([])
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1); // текущая страница
    const [limit, setLimit] = useState(LIMITS[0]); // лимит по умолчанию
    const [pageQty, setPageQty] = useState(1); // кол-во страниц
    const [searchReq, setSearchReq] = useState('');
    const [sortBy, setSortBy] = useState(['id', 'asc']);
    const [available, setAvailable] = useState(true);

    const getFilters = (filter) => {
        return [...new Set(products.map(e => e[filter]).flat(1))]
    }

    const [filters, setFilters] = useState({
        country: [],
        brand: [],
        roast: [],
        type: [],
        label: [],
    });

    console.log(filters);
    console.log(totalCount);

    const [rangeFilters, setRangeFilters] = useState({
        density: 5,
        acidity: 5
    });

    useEffect(() => {
        setPageQty(Math.ceil(totalCount / limit)) // округление до большего
    }, [limit, totalCount]);

    const filtersToRequest = (filters) => {
        let request = '';
        for (let key in filters) {
            if (Object.values(filters[key]).length) {
                request += filters[key].map(e => `${key}_like=${e}`).join('&') + '&';
            }
        }
        return request;
    }

    // console.log('req', filtersToRequest(filters));
    console.log(products);


    useEffect(() => {
        getProducts({}).then(resp => {
            setProducts(resp.data);

        })
    }, [])

    useEffect(() => {
        getProducts(
            // request
            {
                _page: page,
                _limit: limit,
                _sort: sortBy[0],
                _order: sortBy[1],
                'acidity_gte=1&acidity_lte': rangeFilters['acidity'],
                'density_gte=1&density_lte': rangeFilters['density'],
                available,
                title_like: searchReq,
                filters: filtersToRequest(filters),
            }
        ).then(res => {
            setVisibleProducts(res.data);
            setTotalCount(res.headers['x-total-count']);

        });
    }, [
        page,
        limit,
        pageQty,
        sortBy,
        available,
        searchReq,
        rangeFilters,
        filters
        // request
    ]);

    useState(() => {
        // console.log(sortBy)
        setPage(1);
    }, [sortBy, available])

    // обработчик изменений лимита
    const handleLimit = (limit) => {
        setPage(1);
        setLimit(limit)
    }

    const handleRangeFilter = (name, value) => {
        setRangeFilters((prev) => {
            return { ...prev, [name]: +value }
        })
    }

    const toggleFilter = (title, item) => {
        setFilters((prev) => {
            if (prev[title].includes(item)) {
                return { ...prev, [title]: prev[title].filter(e => e !== item) }
            }
            return ({
                ...prev, [title]: [...prev[title], item]
            })
        })
    }

    return (
        <>
            <Header img='ourcoffee'>
                <h2 className='my-5'>Our Coffee</h2>
            </Header>
            <div className='container-lg'>
                {/* <h2 className='mt-5 text-center'>Our coffe...</h2> */}
                <SearchFilterPanel filters={
                    {
                        country: getFilters('country'),
                        brand: getFilters('brand'),
                        roast: getFilters('roast'),
                        type: getFilters('type'),
                        label: getFilters('label'),
                    }}
                    // label={label}
                    available={available}
                    rangeFilters={rangeFilters} handleRangeFilter={handleRangeFilter}
                    // handleLabelFilter={handleLabelFilter}
                    search={setSearchReq} filter={toggleFilter} sorting={setSortBy}
                    isAvailable={setAvailable}
                    limits={LIMITS}
                    handleLimit={handleLimit}
                />
                <Products products={visibleProducts} />
                <Pagination qty={pageQty} page={page} setPage={setPage} />
            </div>
            <Footer />
        </>
    )
}
