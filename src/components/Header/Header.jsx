import { Link } from "react-router-dom"

export default function Header() {

    return (
      <header>
        <h1>
          <Link className="links" id="title-link" to="/">
            Northcoders Games
          </Link>
        </h1>
      </header>
    );
}