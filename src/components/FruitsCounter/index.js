// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count: 0}

  increaseMangoButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  increaseBananaButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="span">{count}</span> Mangoes and
            <span className="span">{count}</span> Bananas
          </h1>
          <div className="image-container">
            <div className="image-container1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="mango"
                alt="mango"
              />
              <button
                className="mango-button"
                type="button"
                onClick={this.increaseMangoButton}
              >
                Eat Mango
              </button>
            </div>
            <div className="image-container2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="banana"
                alt="banana"
              />
              <button
                className="banana-button"
                type="button"
                onClick={this.increaseBananaButton}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
