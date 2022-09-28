import { NavLink } from "react-router-dom";

function MenuItem({title, to}) {
    return (
        <NavLink to={to} end>
            {title}
        </NavLink>
    )
}

export default MenuItem