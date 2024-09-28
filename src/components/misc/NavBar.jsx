import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <h1>AAAnime</h1>
                    </div>
                    <div className={styles.navElements}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/schedule">Schedule</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
