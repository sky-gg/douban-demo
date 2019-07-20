import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames/bind'
import styles from './index.scss'
const cx = classNames.bind(styles)

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      underlinePosition: 0//下划线offsetleft
    }
  }
  handleClick(id, e) {
    let { onNavClick } = this.props
    if (onNavClick) {
      this.setState({
        underlinePosition: e.target.offsetLeft
      })
      onNavClick(id)
    }
  }
  render() {
    const { actived, arr } = this.props
    return (
      <footer className='footbar'>
        <div
          className='underline'
          style={{
            transform: 'translateX(' + this.state.underlinePosition + 'px)',
            width: 100 / arr.length + '%'
          }}
        >
        </div>
        <ul>
          {
            arr.map((item) =>
              <li
                onClick={this.handleClick.bind(this, item.id)}
                className={cx({ 'actived': actived === item.id })}
                key={item.id}
              >
                {item.text}
              </li>
            )
          }
        </ul>

      </footer>
    )
  }
}
Footer.propTypes = {
  actived: PropTypes.number.isRequired,
  arr: PropTypes.array.isRequired,
  onNavClick: PropTypes.func
}
