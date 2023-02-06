import './index.css'
import {Component} from 'react'

const TimerSetting = props => {
  const {onStart, onReset} = props

  const onStartTime = () => {
    onStart()
  }

  const onResetTime = () => {
    onReset()
  }

  return (
    <div className="timer-setting-container">
      <div className="start-reset-container">
        <button
          type="button"
          className="button start-container"
          onClick={onStartTime}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
            alt="play icon"
            className="play-button"
          />
          <p>Start</p>
        </button>

        <button
          type="button"
          className="button start-container"
          onClick={onResetTime}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
            alt="reset icon"
            className="play-button"
          />
          <p>Reset</p>
        </button>
      </div>
      <div className="set-timeout-container">
        <p>Set Timer Limit</p>
        <div className="add-rem-container">
          <span className="plus-icon">-</span>
          <p className="inc-dec-timer-box">25</p>
          <span className="plus-icon">+</span>
        </div>
      </div>
    </div>
  )
}

//
//
//
//
//
//
//
//
//
//

class DigitalTimer extends Component {
  state = {min: 25, sec: 60, isStarted: false}

  componentDidMount() {
    const {isStarted} = this.state
    console.log('did mount')

    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  onStart = () => {
    this.setState({isStarted: true})
  }

  onReset = () => {
    this.setState({isStarted: false, min: 25, sec: 60})
  }

  tick = () => {
    const {min, sec, isStarted} = this.state
    console.log(sec)
    if (isStarted) {
      if (sec === 0 || sec === 60) {
        this.setState(p => ({min: p.min - 1, sec: 60}))
      }
      this.setState(p => ({sec: p.sec - 1}))
    }
  }

  render() {
    const {min, sec} = this.state
    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="time-and-setting-container">
          <div className="time-running-container">
            <div className="time-white-container">
              <h1 className="timer-heading">
                {min}:{sec === 60 ? '00' : sec}
              </h1>
              <p className="paused-para">Paused</p>
            </div>
          </div>

          <div>
            <TimerSetting onStart={this.onStart} onReset={this.onReset} />
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
