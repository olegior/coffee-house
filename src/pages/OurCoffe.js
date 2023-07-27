import { useState, useEffect } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Description } from '../components/Description'
import { About } from '../components/About'
import { Products } from '../components/Products'
import { SearchFilterPanel } from '../components/SearchFilterPanel'

export const OurCoffe = ({ products }) => {
    const country = [...new Set(products.map(product => product.country))];
    const brand = [...new Set(products.map(product => product.brand))];
    const roastDegree = [...new Set(products.map(product => product.roastDegree))];
    const type = [...new Set(products.map(product => product.type))];
    // const available =        [...new Set(products.map(product => product.available))];
    // console.log(products[0]);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [searchReq, setSearchReq] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [available, setAvailable] = useState(false);

    const [filters, setFilters] = useState(
        {
            country: country.reduce((acc, e) => ({ ...acc, [e]: false }), {}),
            brand: brand.reduce((acc, e) => ({ ...acc, [e]: false }), {}),
            roastDegree: roastDegree.reduce((acc, e) => ({ ...acc, [e]: false }), {}),
            type: type.reduce((acc, e) => ({ ...acc, [e]: false }), {}),
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
        // преобразование в удобный вид
        const activeFilters = Object.keys(filters)
            .map(e => ({
                [e]: Object.keys(filters[e])
                    .filter(key => Boolean(filters[e][key]))
            }))


        // если фильтры не установлены - вернуть исходный массив
        if (!activeFilters.filter(e => {
            const [values] = Object.values(e);
            return values.length
        }).length && !available)
            return products

        // копируем массив и фильтруем
        let visibleProducts = structuredClone(products);

        // переделать
        if (available)
            return visibleProducts.filter(product => product.available)

            
        activeFilters.forEach(e => {
            const [[key, value]] = Object.entries(e);
            if (value.length)
                visibleProducts = visibleProducts
                    .filter(product => value.includes(product[key]));
        })
        console.log(available);

        return visibleProducts
    }

    const sortProducts = (products) => {
        if (!sortBy.length)
            return products
        const [prop, direction] = sortBy.split('-');
        const sorted = structuredClone(products);
        // переделать сортировку
        sorted.sort((a, b) => {
            if (direction === 'up') {
                if (!isNaN(sorted[prop]))
                    return a[prop] - b[prop]
                return a[prop].localeCompare(b[prop]);
            } else {
                if (!isNaN(sorted[prop]))
                    return b[prop] - a[prop]
                return b[prop].localeCompare(a[prop]);
            }
        });
        return sorted;
    }

    const searchTitle = (products) => {
        return products.filter(product => product.title.toLowerCase().startsWith(searchReq.toLowerCase()));
    }

    useEffect(() => {
        setVisibleProducts(
            sortProducts(
                filterVisibleProducts(
                    searchTitle(
                        products
                    )
                )
            )
        );
    }, [searchReq, sortBy, filters, available]);

    return (
        <>
            <Header img='ourcoffee'>
                <h2 className='my-5'>Our Coffee</h2>
            </Header>
            <div className='container-lg'>
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
                <SearchFilterPanel filters={[country, brand, roastDegree, type, available]}
                    search={setSearchReq} filter={toggleFilter} sorting={setSortBy}
                    isAvailable={setAvailable}
                />
                <Products products={visibleProducts} />
            </div>
            <Footer />
        </>
    )
}
