import { Link } from "react-router";
import "./navbar.css";
import Button from "../Button/Button";
import WorldIcon from "../Icons/WorldIcon/WorldIcon";
import MapPin from "../Icons/MapPin/MapPin";
import CurrenciesIcon from "../Icons/CurrenciesIcon/CurrenciesIcon";
function NavBar() {
  return (
    <nav>
      <div className="logo">
        <WorldIcon />
        <span>WORD EXPLORER</span>
      </div>
      <ul className="menu">
        <li>
          <Link to="countries">
            <Button variant="primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-search-icon lucide-search"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
              <span>Countries</span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="countries">
            <Button variant="primary">
              <MapPin />
              <span>Regions</span>
            </Button>
          </Link>
        </li>
        <li>
          <Button variant="primary">
            <CurrenciesIcon />
            <span>Currencies</span>
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
