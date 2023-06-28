// Write your code here

import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const image = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const theme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const nameClass = isDarkTheme ? 'light-name' : 'dark-name'

      const navCont = isDarkTheme ? 'nav-light' : 'nav-dark'

      const onClickThemeBtn = () => {
        toggleTheme()
      }

      return (
        <Navbar className={navCont}>
          <img src={image} alt="website logo" className="img" />
          <ul className="name-cont">
            <li className={nameClass}>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className={nameClass}>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
          </ul>
          <button className="btn" type="button" onClick={onClickThemeBtn}>
            <img src={theme} alt="theme light" className="img" />
          </button>
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
