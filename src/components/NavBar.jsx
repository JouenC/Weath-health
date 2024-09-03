import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import logoBrand from "../assets/HRnet_logo-brand.jpg";
import icoList from "../assets/ico-list.png";
import icoAdd from "../assets/User-add-05.png";


const Navbar = () => {
    return (
        <>
      <nav aria-labelledby="nav-title">
        <div tabIndex="0" aria-label="Wealth Health logo" className="nav-item nav-brand">
          <img
            className="nav-logo"
            src={logo}
            alt="Wealth Health logo design"
          />
          <img
            className="nav-logo--brand"
            src={logoBrand}
            alt="Wealth Health logo brand name"
          />
        </div>
        <div className="nav-item nav-menu">
          <h1 tabIndex="0" id="nav-title" className="nav-menu--title">HRnet Employees</h1>
          <NavLink to="/employees" className="nav-menu--choice">
            <img
              className="nav-ico"
              src={icoList}
              alt="Wealth Health logo brand name"
            />
            <span>Current</span>
          </NavLink>
          <NavLink to="/" className="nav-menu--choice">
            <img
              className="nav-ico"
              src={icoAdd}
              alt="Wealth Health logo brand name"
            />
            <span>Create</span>
          </NavLink>
        </div>
      </nav>
      <hr className="nav-shadow" />
    </>
    );
};

export default Navbar;