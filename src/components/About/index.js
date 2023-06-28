// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

      const clsName = isDarkTheme ? 'lightName' : 'darkName'

      return (
        <>
          <Navbar />
          <div className="home-cont">
            <img src={aboutImage} alt="home light" className="image" />
            <h1 className={clsName}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
