import { Link, Outlet, useParams } from "react-router-dom";

export default function Author() {
  const { name } = useParams();
  return (
    <div>
      <h1>{name?.replaceAll("_", " ")}</h1>
      {name === "J.K.Rowling" ? (
        <ul>
          <Link to="Herry_Potter_I">
            <li>Herry Potter I</li>
          </Link>
          <Link to="Herry_Potter_II">
            <li>Herry Potter II</li>
          </Link>
        </ul>
      ) : (
        <ul>
          <Link to="Lord_of_The_Rings_I">
            <li>Lord of The Rings I</li>
          </Link>
          <Link to="Lord_of_The_Rings_II">
            <li>Lord of The Rings II</li>
          </Link>
        </ul>
      )}
      <Outlet />
    </div>
  );
}
