import { useState, useEffect } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Description } from '../components/Description'
import { About } from '../components/About'
import { Products } from '../components/Products'
import { SearchFilterPanel } from '../components/SearchFilterPanel'

export const OurCoffe = ({ products }) => {
    const countries = [...new Set(products.map(product => product.country))];
    const brands = [...new Set(products.map(product => product.brand))];

    const [visibleProducts, setVisibleProducts] = useState([]);
    const [searchReq, setSearchReq] = useState('');
    const [sortBy, setSortBy] = useState('');

    const [filters, setFilters] = useState(
        {
            countries: countries.reduce((acc, e) => ({ ...acc, [e]: false }), {}),
            brands: brands.reduce((acc, e) => ({ ...acc, [e]: false }), {})
        }
    );

    const toggleFilter = (title, item) => {
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

    const filterVisibleProducts = (products) => {
        const [countries, brands] = Object.keys(filters)
            .map(e => Object.keys(filters[e])
                .filter(key => Boolean(filters[e][key])));
        let visibleProducts = structuredClone(products)
        if (countries.length)
            visibleProducts = visibleProducts.filter(product => countries.includes(product.country));
        if (brands.length)
            visibleProducts = visibleProducts.filter(product => brands.includes(product.brand));
        return visibleProducts
    }

    const sortProducts = (products) => {
        const [prop, type] = sortBy.split('-');
        const sorted = structuredClone(products);
        sorted.sort((a, b) => type === 'up' ? a[prop] - b[prop] : b[prop] - a[prop]);
        return sorted;
    }

    const searchTitle = (products) => {
        return products.filter(product => product.title.toLowerCase().startsWith(searchReq.toLowerCase()));
    }

    useEffect(() => {
        // try {
        setVisibleProducts(
            sortProducts(
                filterVisibleProducts(
                    searchTitle(
                        products
                    )
                )
            )
        );
        // }
        // catch (e) {
        //     console.log(e);
        //     setVisibleProducts([]);
        // }
    }, [searchReq, sortBy, filters]);

    return (
        <>
            <Header img='ourcoffee'>
                <h2 className='my-5'>Our Coffee</h2>
            </Header>
            <div className='container'>
                <Description img='ourcoffee'>
                    <About title={'About our beans'}>
                        <p className='lead text-center'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <p className='lead text-center'>Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.</p>
                        <p className='lead text-center'>As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</p>
                    </About>
                </Description>
                <div className='border-bottom border-black mx-auto' style={{ width: 240, height: 1 }} />
                <SearchFilterPanel filters={[countries,brands]} search={setSearchReq} filter={toggleFilter} sorting={setSortBy} />
                <Products products={visibleProducts} />
            </div>
            <Footer />
        </>
    )
}
