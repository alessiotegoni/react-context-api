import { Link, NavLink, Outlet } from "react-router-dom";
import { navLinks } from "../../constants/index";

const Layout = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              React router
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span classNameName="navbar-toggler-icon">
                <img
                  src="https://images.vexels.com/media/users/3/155474/isolated/preview/4e12cd94f7591c3c851fce62fdc3d463-x-cross-doodle-icon.png"
                  alt="x icon"
                  width={20}
                />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {navLinks.map((navLink) => (
                  <li className="nav-item">
                    <NavLink to={navLink.value} className="nav-link">
                      {navLink.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="my-5">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default Layout;
