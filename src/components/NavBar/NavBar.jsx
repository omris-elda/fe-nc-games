import { useNavigate } from "react-router-dom";

export default function NavBar() {

    const navigate = useNavigate();

    return (
      <nav>
        <button className="buttons" onClick={() => navigate("/reviews")}>
          Reviews
        </button>
        <button className="buttons" onClick={() => navigate("/categories")}>
          Categories
        </button>
        <button className="buttons" onClick={() => navigate("/login")}>
          Login
        </button>
      </nav>
    );
}