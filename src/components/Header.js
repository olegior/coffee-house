import { Navigation } from './Navigation'

import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export const Header = ({ img, children }) => {
    const { pathName } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName])
    const backgroundImage = `url("assets/bg/${img}.jpg")`
    return (
        <header className='bg-image text-white container-fluid py-4' style={{
            backgroundImage,
            backgroundPosition: 'center',
            backgroundSize: 'cover'

        }}>
            <Navigation color />
            <div className='d-flex flex-column align-items-center justify-content-evenly container'>{children}</div>
        </header>
    )
}
