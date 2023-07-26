import { ProductCard } from './ProductCard'

export const Products = ({ products }) => {
  return (
    <div className='gap-5 d-flex flex-wrap justify-content-center'>
      {
        products.length ? products.map(product => <ProductCard key={product.id} {...product} />)
          : <h5>Unfortunately, nothing was found.</h5>
      }
    </div>
  )
}
