import { NavLink } from "react-router-dom";

function MenuItem({title, to, ...props}) {
    return (
        <NavLink to={to} end {...props}>
            {title}
        </NavLink>
    )
}

export default MenuItem