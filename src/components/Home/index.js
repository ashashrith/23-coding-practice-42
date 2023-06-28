// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

      const clsName = isDarkTheme ? 'lightName' : 'darkName'

      const altName = isDarkTheme ? 'theme' : 'home'

      return (
        <>
          <Navbar />
          <div className="home-cont">
            <img src={homeImage} alt={altName} className="image" />
            <h1 className={clsName}>home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
