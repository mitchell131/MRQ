import { NavLink } from 'react-router-dom';
import './navbar.scss';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
            <NavLink 
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/"><span>Dashboard</span></NavLink>
        </li>
        <li>
          <NavLink 
             className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           }
          to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink
             className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           }
          to="/statements">Statements</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
