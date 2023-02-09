import styles from './Header.module.css'
import pretoNaGringaLogo from '../assets/logo.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={pretoNaGringaLogo} />
        </header>
    )
}