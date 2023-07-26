import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { About } from '../components/About'
import { ProductCard } from '../components/ProductCard'

import { Link} from 'react-router-dom'
import { Carousel } from '../components/Carousel'

export const MainPage = ({ products }) => {
    return (
        <>
            <Header img='main'>
                <About title="Everything You Love About Coffee" color="white">
                    <h3 className="my-3 text-center">We makes every day full of energy and taste</h3>
                    <h3 className="my-3 text-center">Want to try our beans?</h3>
                    <Link to={"/our-coffee"}>
                        <button type="button" className="btn btn-outline-light my-3" style={{ width: 120 }}>More</button>
                    </Link>
                </About>
            </Header>
            <About title={'About us'}>
                <p className='lead text-center'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.</p>
                <p className='lead text-center'>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.</p>
            </About>
            <div className='d-flex flex-column py-5' style={{
                backgroundImage: 'url("assets/bg/best.jpg")',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }} >
                <h2 className='text-center py-5 container' >Our best</h2>
                <Carousel products = {products.filter(product => product.best)}/>
                {/* <div className='best container d-flex flex-row justify-content-evenly flex-wrap gap-5 pb-5'>
                    {
                        products.filter(product => product.best)
                            .map(product => <ProductCard key={product.id} {...product} />)
                    }
                </div> */}
            </div>
            <Footer />
        </>
    )
}
