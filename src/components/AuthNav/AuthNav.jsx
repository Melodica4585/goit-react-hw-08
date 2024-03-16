import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={css.authList}>
      <NavLink className={css.authNav} to="/register">Sign Up</NavLink>
      <NavLink className={css.authNav} to="/login">Login</NavLink>
    </div>
  );
};