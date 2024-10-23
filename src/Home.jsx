import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Best Seller Authors</h1>
      <ul>
        <Link to="/author/J._K._Rowling">
          <li>J.K.Rowling</li>
        </Link>
        <Link to="/author/J._R._R._Tolkein">
          <li>J.R.R.Tolkein</li>
        </Link>
      </ul>
    </div>
  );
}
