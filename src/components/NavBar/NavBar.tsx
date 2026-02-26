import { Link, useLocation, useParams } from "react-router";
import "./navbar.css";
import Button from "../Button/Button";
import WorldIcon from "../Icons/WorldIcon/WorldIcon";
import MapPin from "../Icons/MapPin/MapPin";
import CurrenciesIcon from "../Icons/CurrenciesIcon/CurrenciesIcon";
function NavBar() {
  const location = useLocation();

  const activeMenu = location.pathname.split("/")[1];
  console.log("activeMenu", activeMenu);
  return (
    <nav>
      <div className="logo">
        <WorldIcon />
        <span>WORD EXPLORER</span>
      </div>
      <ul className="menu">
        <li>
          <Link to="countries">
            <Button variant="primary" isActive={activeMenu === "countries"}>
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
          <Link to="/regions">
            <Button variant="primary" isActive={activeMenu === "regions"}>
              <MapPin size={20} />
              <span>Regions</span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="currencies">
            <Button variant="primary" isActive={activeMenu === "currencies"}>
              <CurrenciesIcon />
              <span>Currencies</span>
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
