import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Description } from '../components/Description'
import { About } from '../components/About'
import { Products } from '../components/Products'

export const ForYourPleasure = ({ products }) => {
    return (
        <>
            <Header img='foryourpleasure'>
                <h2 className='my-5'>For your pleasure</h2>
            </Header>
            <div className='container'>
                <Description img='foryourpleasure'>
                    <About title={'About our beans'}>
                        <p className='lead text-center'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <p className='lead text-center'>Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.</p>
                        <p className='lead text-center'>As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</p>
                    </About>
                </Description>
                <div className='border-bottom border-black mx-auto my-5' style={{ width: 240, height: 1 }} />
                <Products products={products} />
            </div>
            <Footer />
        </>
    )
}
