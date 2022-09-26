import { useNavigate } from "react-router-dom";

export default function NavBar() {

    const navigate = useNavigate();

    return (
        <nav>
            <button className="buttons" onClick={() => navigate("/users")}>Users</button>
            <button className="buttons" onClick={()=> navigate("/games")}>Games</button>
        </nav>
    );
}