import { Link } from "react-router";

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="countries">Countries</Link>
      </li>
    </ul>
  );
}

export default NavBar;
