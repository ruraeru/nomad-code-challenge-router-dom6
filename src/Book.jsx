import { Link, Outlet, useParams } from "react-router-dom";

export default function Book() {
  const { book } = useParams();
  return (
    <div>
      <h2>{book?.replaceAll("_", " ")}</h2>
      <Link to="chapters">Chapters</Link>
      <br />
      <Link to="characters">Characters</Link>
      <Outlet />
    </div>
  );
}
