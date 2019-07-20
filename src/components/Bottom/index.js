import React, { Component } from 'react'
import './index.scss'

export default class Bottom extends Component {
  render() {
    return (
      <section className='footer-bar'>
        <span className="footer-bar-item">购物说明</span>
        <i className="footer-bar-line"></i>
        <span className="footer-bar-item">意见反馈</span>
        <i className="footer-bar-line"></i>
        <span className="footer-bar-item">商务合作</span>
      </section>
    )
  }
}
