import { Link } from "react-router-dom";
import { useThemeStore } from "../store/useThemeStore";

function Navbar(){
    const {theme, toggleTheme} = useThemeStore();

    const isDarkMode = theme === "dark"

    return(
        <div className="navbar">
            <div className="navbar-title">My Game Site</div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/create">Add game</Link>

                <label className="theme-switch">
                    <input type="checkbox" 
                    onChange={toggleTheme} 
                    checked={isDarkMode} 
                    aria-label="Toggle-theme"
                    />
                    <span className="slider round"></span>
                </label>
            </div>

        </div>
    )
}
export default Navbar;