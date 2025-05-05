import { Link, useNavigate } from "react-router-dom";

interface NavBarProps {
  onLogout: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    onLogout(); // tells App to update state
    navigate("/"); // redirect to login
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div
      className="d-flex flex-column p-4 bg-dark text-white"
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
        <h4 className="fw-bold">GalleryApp</h4>
      </div>

      <ul className="nav nav-pills flex-column gap-3">
        <li className="nav-item">
          <Link to="/videos" className="nav-link text-white bg-transparent px-0">
            Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/upload" className="nav-link text-white bg-transparent px-0">
            Upload
          </Link>
        </li>
      </ul>

      <div className="mt-auto pt-3 border-top border-secondary">
        <h6>{user.email || "User"}</h6>
        <button className="btn btn-sm btn-danger mt-2" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
