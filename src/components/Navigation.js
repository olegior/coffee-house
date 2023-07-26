import { Link } from "react-router-dom"
export const Navigation = ({ white, center }) => {
    return (
        <nav className="navbar navbar-expand container" data-bs-theme={white && "dark"}>
            <div className="navbar-nav" style={center && {margin: "0 auto"}}>
                <Link className="nav-link" to="/">
                    <img src="assets/logo.png" alt="Logo" className="d-inline-block align-text-bottom" style={white && { filter: "invert(1)" }} />Coffee house</Link>
                <Link className="nav-link" style={{paddingTop:'20px'}} to="/our-coffee">Our coffee</Link>
                <Link className="nav-link" style={{paddingTop:'20px'}} to="/for-your-pleasure">For your pleasure</Link>
            </div>
        </nav>
    )
}
