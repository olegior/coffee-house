import { Separator } from './Separator.js'
import { Navigation } from './Navigation.js'

export const Footer = () => {
    return (
        <footer className='pt-5 d-flex flex-column'>
            <Navigation center/>
            <Separator />
        </footer>
    )
}
