import { useState, useEffect } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Products } from '../components/Products'
import { SearchFilterPanel } from '../components/SearchFilterPanel'

import getProducts from '../utils/getProducts'
import { Pagination } from '../components/Pagination'

export const OurCoffe = () => {

    const [totalCount, setTotalCount] = useState(0);// кол-во продуктов, из запроса
    const LIMITS = [15, 25, 50]; // 10,16,25
    const [visibleProducts, setVisibleProducts] = useState([])
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1); // текущая страница
    const [limit, setLimit] = useState(LIMITS[0]); // лимит по умолчанию
    const [pageQty, setPageQty] = useState(1); // кол-во страниц
    const [searchReq, setSearchReq] = useState('');
    const [sortBy, setSortBy] = useState(['id', 'asc']);
    const [available, setAvailable] = useState(true);
    const [isFiltred, setIsFiltred] = useState(false);

    console.log(isFiltred);
    // let products = [];
    // products = useMemo(async () => await getProducts({}).data)


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

    const [rangeFilters, setRangeFilters] = useState({
        density: 5,
        acidity: 5
    });

    // получение всего массива продуктов


    useEffect(() => {
        try {
            getProducts({}).then(resp => {
                setProducts(resp.data);
            })
        }
        catch (err) {
            console.log(err);
        }
    }, [])

    useEffect(() => {
        setPageQty(Math.ceil(totalCount / limit)) // округление до большего
    }, [limit, totalCount]);

    useEffect(() => {
        setPage(1);
    }, [sortBy, available, filters, pageQty, limit, searchReq, rangeFilters])



    useEffect(() => {
        let isFiltredValue = false;
        for (let filter in filters) {
            if (filters[filter].length)
                isFiltredValue = true;
        }
        for (let filter in rangeFilters) {
            if (rangeFilters[filter].length)
                isFiltredValue = true;
        }
        if (searchReq.length)
            isFiltredValue = true;

        if (isFiltredValue)
            setIsFiltred(isFiltredValue);

    }, [filters, rangeFilters, searchReq])

    useEffect(() => {
        try {
            getProducts({
                _page: page,
                _limit: limit,
                _sort: sortBy[0],
                _order: sortBy[1],
                // 'acidity_gte=1&acidity_lte': rangeFilters['acidity'],
                // 'density_gte=1&density_lte': rangeFilters['density'],
                available,
                title_like: searchReq,
                filters: filtersToRequest(filters),
            }
            ).then(res => {
                setVisibleProducts(res.data);
                setTotalCount(+res.headers['x-total-count']);
            });
            // window.scrollTo(0, 0);
            document.querySelector('.products-section').scrollIntoView(true)
        }
        catch (err) {
            console.log(err);
        }
    }, [page, limit, pageQty, sortBy, available, searchReq, rangeFilters, filters]);

    const handleRangeFilter = (name, value) => {
        setRangeFilters((prev) => {
            return { ...prev, [name]: +value }
        });
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
    const filtersToRequest = (filters) => {
        let request = '';
        for (let key in filters) {
            if (Object.values(filters[key]).length) {
                request += filters[key].map(e => `${key}_like=${e}`).join('&') + '&';
            }
        }

        for (let key in rangeFilters) {
            if (rangeFilters[key] < 5) {
                request += `acidity_gte=1&acidity_lte=${rangeFilters[key]}`;
            }
        }

        return request;
    }

    return (
        <>
            <Header img='ourcoffee'>
                <h2 className='my-5'>Our Coffee</h2>
            </Header>
            <div className='container products-section'>
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
                    searchReq={searchReq}
                    search={setSearchReq} filter={toggleFilter} sorting={setSortBy}
                    isAvailable={setAvailable}
                    limits={LIMITS}
                    // handleLimit={handleLimit}
                    handleLimit={setLimit}
                    isFiltred={isFiltred}
                />
                <Products products={visibleProducts} />
                <Pagination qty={pageQty} page={page} setPage={setPage} />
            </div>
            <Footer />
        </>
    )
}
