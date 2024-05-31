import { NavLink, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
    const navigate = useNavigate();

    function navigateHandler(){
        navigate('/allseasons');
    };

    return (
        
        <header className="row align-center">
            <div className="col">
                <nav className="navbar gap-2">
                    <h2>Logo</h2>
                    <ul className="navbar-menu remove-tablet">
                        <li><NavLink to="/" className={({isActive}) => isActive ? "active" : undefined } end> Spring</NavLink></li>
                        <li><NavLink to="/summer" className={({isActive}) => isActive ? "active" : undefined } >Summer</NavLink></li>
                        <li><NavLink to="/fall" className={({isActive}) => isActive ? "active" : undefined } >Fall</NavLink></li>
                        <li><NavLink to="/winter" className={({isActive}) => isActive ? "active" : undefined } >Winter</NavLink></li>
                        <li><button onClick={navigateHandler} className="btn">All Seasons</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}