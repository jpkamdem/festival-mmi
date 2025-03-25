import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="bg-blanc-casse relative drop-shadow-2xl flex justify-between">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo MMI" className="h-20 ml-2" />
        </Link>
      </div>
      <div className="relative py-8 mr-6 flex gap-x-8">
        <div className="header-links">
          <Link to="/selection">Sélection officielle</Link>
        </div>
        <div className="header-links">
          <Link to="/laureats">Lauréats</Link>
        </div>
        <div className="header-links">
          <Link to="/connexion">Connexion</Link>
        </div>
      </div>
    </header>
  );
}
