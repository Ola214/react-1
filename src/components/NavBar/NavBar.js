import Container from "../Container/Container";
import styles from './NavBar.module.scss';
import { useState } from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return  (
        <nav className = {styles.navbar}>
            <Container>
                <div className={styles.row}>
                    <button type="button" className={styles.hamburger} onClick={() => setOpen((s) => !s)}
                        aria-expanded={open}
                        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
                    >
                        ☰
                    </button>
                    <ul className={styles.links}
                        data-open={open ? "true" : "false"}
                    >
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? styles.linkActive : undefined} to="/favorite">Favourite</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? styles.linkActive : undefined} to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
}

export default NavBar;