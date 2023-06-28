// Write your code here

import './index.css'

const NotFound = () => (
  <div className="notfound-cont">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
      className="not-img"
    />
    <h1 className="not-head">Lost Your Way?</h1>
    <p className="not-p">
      We cannot seem to find the page you are looking for.
    </p>
  </div>
)

export default NotFound
