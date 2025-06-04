import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-title">My Game Site</div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/create">Add game</Link>
            </div>

        </div>
    )
}
export default Navbar;