import { useState, createContext } from 'react'
import { Link } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { products } from './contentData.js'

import { Modal } from './components/Modal.js'
import { ForYourPleasure } from './pages/ForYourPleasure.js'
import { MainPage } from './pages/MainPage.js'
import { OurCoffe } from './pages/OurCoffe.js'
// import { ProductCard } from './components/ProductCard.js';

export const ModalContext = createContext()

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "*",
      element: (
        <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
          <h1>Error! Page not found</h1>
          <Link to="/">to homepage</Link>
        </div>
      )
    },
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/our-coffee",
      element: <OurCoffe />,
      // children: [
      //   { path: "/our-coffee/1", element: <ProductCard /> },
      //   { path: "/our-coffee/2", element: <ProductCard /> },
      //   { path: "/our-coffee/3", element: <ProductCard /> },
      // ]
    },
    {
      path: "/for-your-pleasure",
      element: <ForYourPleasure
      // products={products} 
      />,
    },
  ])
  const [modalContent, setModalContent] = useState({
    // title: null,
    // country: null,
    // description: null,
    // price: null,
    // img: null,
    // acidity : null,
    // available : null,
    // brand : null,
    // category : null,
    // density : null,
    // id : null,
    // label : null,
    // quantity : null,
    // roastDegree : null,
    // sizes : null,
    // taste : null,
    // type : null,
  })

  return (
    // <>
    <ModalContext.Provider value={[modalContent, setModalContent]}>
      <RouterProvider router={router} />
      <Modal />
    </ModalContext.Provider>
    // </> 
  )
}
