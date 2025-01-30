import { appLogo } from "../utils/url";

const NavBar = ()=>{
    return (<div className="navbar">
        <img className="logoImage"
        src={appLogo}
        alt="App Icon">
        </img>
        <ul className="listItems">
            <li>About</li>
            <li>Home</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
)}

export default NavBar;