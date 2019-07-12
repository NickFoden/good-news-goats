import React from "react";
import { Link } from "react-navi";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <nav className="App-nav">
          <Link href="/" activeClassName="active" exact>
            Home
          </Link>
          <Link href="/projects/" activeClassName="active">
            Projects
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
