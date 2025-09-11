import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="bg-boycott-red fixed top-0 z-10 flex w-full justify-center shadow-md">
      <nav className="flex w-full items-center justify-between p-4 text-white">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">
            <Logo isDark={false} />
          </Link>
        </div>
        <div className="flex gap-4">
          <Link to="/about">About</Link>
          <Link to="/linktree">Linktree</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
