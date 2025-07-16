import style from "../assets/css/Header.module.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className= {style.header}>
            <div className= {style.header_wrap}>
                <Link to ="/" className = {style.header_link}>
                    <h2 className={style.title}>Movie</h2>
                </Link>
            </div>
        </header>
    );
}

export default Header;