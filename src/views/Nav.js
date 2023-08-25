import "./Nav.scss"
import logotruong from "./logo.png"
const Nav = () => {
    return (
        <div className="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    )
}
export default Nav;