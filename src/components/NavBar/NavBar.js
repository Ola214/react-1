import Container from "../Container/Container";
import styles from './NavBar.module.scss';
import { useState } from "react";

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
                        <li>Home</li>
                        <li>Favourite</li>
                        <li>About</li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
}

export default NavBar;