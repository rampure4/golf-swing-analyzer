import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      className="d-flex flex-column p-4 bg-dark text-black"
      style={{
        width: "240px",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        borderRight: "1px solid #444",
      }}
    >
      <div className="mb-4">
        <h4 className="fw-bold">
          GalleryApp
        </h4>
      </div>

      <ul className="nav nav-pills flex-column gap-3">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white bg-transparent px-0">
            Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/upload" className="nav-link text-white bg-transparent px-0">
            Upload
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/upload" className="nav-link text-white bg-transparent px-0">
            Messages
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/upload" className="nav-link text-white bg-transparent px-0">
            Your Posts
          </Link>
        </li>
      </ul>
      <div className="mt-auto pt-3 border-top border-secondary">
        <h6>User Name</h6>
      </div>
    </div>
  );
};

export default NavBar;
