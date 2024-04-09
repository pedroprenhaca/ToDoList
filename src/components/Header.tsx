import logo from '../assets/logo todolist.png'
import styles from './Header.module.css'

export function Header(){
    return(
    <div>
        <header className={styles.header}>
                <img src={logo} alt="logo escrito todolist" />
        </header>
    </div>
    )
}