import styles from './Header.module.css'
import logo from '../../assets/images/logo.svg'
import abta from '../../assets/images/ABTA.svg'
import atol from '../../assets/images/TOL.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={styles.logos}>
          <img src={abta} alt="ABTA logo" />
          <img src={atol} alt="ATOL logo" />
          <h2>ATOL<br/>Protected</h2>
        </div>
      </div>
    </header>
  )
}

export default Header