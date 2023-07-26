import { useState, createContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { products } from './contentData.js'

import { Modal } from './components/Modal.js'
import { ForYourPleasure } from './pages/ForYourPleasure.js'
import { MainPage } from './pages/MainPage.js'
import { OurCoffe } from './pages/OurCoffe.js'

export const ModalContext = createContext()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage products={products} />,
  },
  {
    path: "/our-coffee",
    element: <OurCoffe products={products} />,
  },
  {
    path: "/for-your-pleasure",
    element: <ForYourPleasure products={products} />,
  },
])



export const App = () => {
  const [modalContent, setModalContent] = useState({
    title: null,
    country: null,
    description: null,
    price: null,
    img: null,
    acidity : null,
    available : null,
    brand : null,
    category : null,
    density : null,
    id : null,
    label : null,
    quantity : null,
    roastDegree : null,
    sizes : null,
    taste : null,
    type : null,
  })

  return (
    <>
      <ModalContext.Provider value={[modalContent, setModalContent]}>
        <RouterProvider router={router} />
        <Modal />
      </ModalContext.Provider>
    </>
  )
}
