import styles from './Sidebar.module.css'
import profileImage from './../assets/logo.png'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';
export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <img src={profileImage}></img>

            <div className={styles.profile}>
                <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/16150527?v=4" />
                <strong>Joel Bispo</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </div>
    );
}