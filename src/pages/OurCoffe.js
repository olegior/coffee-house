import { useState, useEffect } from 'react'
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
    // подобрать подходящие лимиты
    const LIMITS = [15, 25, 50]; // 10,16,25
    const [products, setProducts] = useState([])

    const [page, setPage] = useState(1); // текущая страница
    const [limit, setLimit] = useState(LIMITS[0]); // лимит по умолчанию
    const [pageQty, setPageQty] = useState(1); // кол-во страниц

    // const [visibleProducts, setVisibleProducts] = useState([]);
    const [searchReq, setSearchReq] = useState('');
    const [sortBy, setSortBy] = useState(['id', 'asc']);
    const [available, setAvailable] = useState(true);

    const getFilters = (filter) => {
        return [...new Set(products.map(e => e[filter]).flat(1))]
    }

    const label = getFilters('label');

    const createFilter = (array) => {
        return array.reduce((acc, e) => ({ ...acc, [e]: false }), {});
    }

    const [filters, setFilters] = useState({
        country: createFilter(getFilters('country')),
        brand: createFilter(getFilters('brand')),
        roast: createFilter(getFilters('roast')),
        type: createFilter(getFilters('type')),
    }
    );

    const [rangeFilters, setRangeFilters] = useState({
        density: 5,
        acidity: 5
    });

    const [labelFilter, setLabelFilter] = useState({ ...createFilter(label) })


    useEffect(() => {
        setPageQty(Math.ceil(totalCount / limit)) // округление до большего
    }, [limit, totalCount]);


    // const [request, setRequest] = useState({
    //     _page: page,
    //     _limit: limit,
    // });

    const filtersToRequest = (filters) => {
        const request = Object.entries(filters).map(([key, value])=>{
            console.log(key,value);
            return `${key}`
        })
        return request;
    }

    console.log(filtersToRequest(filters));

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

            }
        ).then(res => {
            setProducts(res.data);
            // console.log(res);
            setTotalCount(res.headers['x-total-count']);
        });
    }, [page, limit,
        pageQty,
        sortBy,
        available,
        searchReq,
        rangeFilters
        // request
    ]);

    // обработчик изменений лимита
    const handleLimit = (limit) => {
        setPage(1);
        setLimit(limit)
    }


    console.log(
        // labelFilter, 
        // rangeFilters,
        // filters
    );
    const handleRangeFilter = (name, value) => {
        setRangeFilters((prev) => {
            return { ...prev, [name]: +value }
        })
    }

    const handleLabelFilter = (name, value) => {
        setLabelFilter((prev) => {
            return ({ ...prev, [value]: !prev[value] })
        })
    }

    const toggleFilter = (title, item) => {
        console.log(title, item);
        setFilters((prev) => {
            return ({
                ...prev,
                [title]: {
                    ...prev[title],
                    [item]: !prev[title][item]
                }
            })
        })
    }

    // const filterVisibleProducts = (products) => {
    //     console.log(filters);
    //     // преобразование в удобный вид
    //     const activeFilters = Object.keys(filters)
    //         .map(e => ({
    //             [e]: Object.keys(filters[e])
    //                 .filter(key => Boolean(filters[e][key]))
    //         }))

    //     // копируем массив и фильтруем
    //     let visibleProducts = structuredClone(products);
    //     //если активирован range
    //     visibleProducts = visibleProducts.filter(e =>
    //         e.acidity <= rangeFilters.acidity && e.density <= rangeFilters.density);

    //     const activeLabels = [];
    //     for (let label in labelFilter) {
    //         if (labelFilter[label])
    //             activeLabels.push(label)
    //     }

    //     if (activeLabels.length) {
    //         visibleProducts = visibleProducts.filter(e => {
    //             if (!e.label.length) {
    //                 return false;
    //             }
    //             return e.label.filter(label => activeLabels.includes(label)).length;
    //         });
    //     }
    //     // console.log(visibleProducts.length);

    //     // console.log(visibleProducts);
    //     // если фильтры не установлены - вернуть исходный массив

    //     // if (!activeFilters.filter(e => {
    //     //     const [values] = Object.values(e);
    //     //     return values.length
    //     // }).length && !available)
    //     //     return products

    //     // переделать
    //     if (available) {
    //         visibleProducts = visibleProducts.filter(product => product.available)
    //     }


    //     activeFilters.forEach(e => {
    //         const [[key, value]] = Object.entries(e);
    //         if (value.length) {
    //             visibleProducts = visibleProducts
    //                 .filter(product => value.includes(product[key]));
    //             // console.log(visibleProducts);
    //         }
    //     })

    //     return visibleProducts
    // }

    // useEffect(() => {
    //     setVisibleProducts(
    //         // sortProducts(
    //         filterVisibleProducts(
    //             // searchTitle(
    //             products
    //             // )
    //         )
    //         // )
    //     );
    // }, [searchReq, sortBy, filters, available, rangeFilters, labelFilter, products]);

    return (
        <>
            <Header img='ourcoffee'>
                <h2 className='my-5'>Our Coffee</h2>
            </Header>
            <div className='container-lg'>
                {/* <Description img='ourcoffee'>
                    <About title={'About our beans'}>
                        <p className='lead text-center'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <p className='lead text-center'>Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.</p>
                        <p className='lead text-center'>As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</p>
                    </About>
                </Description> */}
                {/* <div className='border-bottom border-black mx-auto' style={{ width: 240, height: 1 }} /> */}

                <h2 className='mt-5 text-center'>Our coffe...</h2>

                <SearchFilterPanel filters={

                    {
                        country: getFilters('country'),
                        brand: getFilters('brand'),
                        roast: getFilters('roast'),
                        type: getFilters('type'),
                        // country
                        // brand, 
                        // roast, 
                        // type, 
                        // label
                    }}
                    label={label}
                    available={available}
                    rangeFilters={rangeFilters} handleRangeFilter={handleRangeFilter}
                    handleLabelFilter={handleLabelFilter}
                    search={setSearchReq} filter={toggleFilter} sorting={setSortBy}
                    isAvailable={setAvailable}
                    limits={LIMITS}
                    handleLimit={handleLimit}
                />
                <Products products={products} />
                {/* <Products products={visibleProducts} /> */}
                <Pagination qty={pageQty} page={page} setPage={setPage} />
            </div>
            <Footer />
        </>
    )
}
