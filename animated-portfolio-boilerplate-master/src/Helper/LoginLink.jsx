import { Link } from "react-router-dom";

function LoginLink({ classLink }) {
  return (
    <Link to={"/auth/admin/login"} className={`${classLink}`}>
      Login
    </Link>
  );
}

export default LoginLink;
