import {Link, useMatch, useResolvedPath} from "react-router-dom";
import {StyledNavLink} from "./style/Nav";

export const NavLink = ({to, children, ...props}) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <StyledNavLink className={isActive ? "active" : ""} to={to} {...props}>
            {children}
        </StyledNavLink>
    )
}