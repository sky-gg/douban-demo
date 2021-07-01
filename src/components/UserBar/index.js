import React, { Component } from 'react'
import './index.scss'
import { Skeleton } from 'antd'

export default class UserBar extends Component {
  constructor() {
    super()
    this.state = {
      checked: false
    }
  }
  fn = () => {
    this.setState({ checked: !this.state.checked })
  }
  render() {
    const { market_people } = this.props
    const { checked } = this.state
    return (
      market_people && market_people.data ?
        <section className="user-bar">
          <a className="user-bar-cart" href={market_people.data.cart_url}>
            购物车<em className="user-bar-cart-num">{market_people.data.cart_num ? market_people.data.cart_num : ''}</em>
          </a>
          <i className="user-bar-line"></i>
          <div className={checked ? "check base" : "uncheck base"} onClick={this.fn}>
            <i />
          </div>
          <a className="user-bar-people" href={market_people.data.people_url}> 我的豆品</a>
        </section >
        : <Skeleton />
    )
  }
}
