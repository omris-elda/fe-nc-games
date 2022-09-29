import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoggedIn } from "../../contexts/loggedin";

export default function NavBar() {
  const { loggedIn, setLoggedIn } = useContext(LoggedIn);
  const navigate = useNavigate();

  const logOut = () => {
    setLoggedIn("");
  };

  return (
    <nav>
      <button className="buttons" onClick={() => navigate("/reviews")}>
        Reviews
      </button>
      <button className="buttons" onClick={() => navigate("/categories")}>
        Categories
      </button>
      {loggedIn ? (
        <button className="buttons" onClick={() => logOut()}>
          Logout
        </button>
      ) : (
        <button className="buttons" onClick={() => navigate("/login")}>
          Login
        </button>
      )}
    </nav>
  );
}