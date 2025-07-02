import './Header.css'
import logo from '../../assets/images/logo.svg'
import abta from '../../assets/images/ABTA.svg'
import atol from '../../assets/images/TOL.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="header__logos">
          <img src={abta} alt="ABTA logo" />
          <img src={atol} alt="ATOL logo" />
        </div>
      </div>
    </header>
  )
}

export default Header