import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="about">
          <li>About</li>
        </Link>
      </ul>
      <Outlet />
    </div>
  );
}

export default Root;
