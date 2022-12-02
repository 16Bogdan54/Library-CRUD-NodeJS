import {NavLink} from "./NavLink";
import {Logo} from './Logo';
import {Nav} from './style/Nav';


export const NavBar = () => {
    return (
        <Nav>
            <Logo/>
            <NavLink to={"/addbook"}>Add Book</NavLink>
        </Nav>
    )
}