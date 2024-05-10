import { Link } from "react-router-dom";

function DashLink({ classLink }) {
  return (
    <Link to={"/api/admin-dashboard/achraf0El"} className={`${classLink}`}>
      Dashboard
    </Link>
  );
}

export default DashLink;
