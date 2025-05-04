import { Link } from "react-router-dom";

const NavBar = () => {
    return(
    <nav style={{ marginBottom: '2rem' }}>
    <Link to="/" style={{ marginRight: '1rem' }}>Gallery</Link>
    <Link to="/upload" style={{ marginRight: '1rem' }}>Upload</Link>
  </nav>
    )
}

export default NavBar;