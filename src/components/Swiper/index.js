import React, { Component } from 'react'
import './index.scss'
import { Skeleton } from 'antd'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

export default class Swipers extends Component {
  componentDidUpdate(){
    new Swiper('.swiper-container', {
      loop: true, //循环
      autoplay: { //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
        delay: 2500,
        disableOnInteraction: false //户操作swiper之后，是否禁止autoplay。默认为true：停止。
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,// 允许点击跳转
      },
    })
  }
  render() {
    const { market_banner } = this.props
    return (
      <section className="swiper-banner">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {market_banner && market_banner.data.banner ? market_banner.data.banner.map(item => (
              <a href={item.link} key={item.link} className="swiper-slide" style={{ backgroundImage: `url(${item.image})`, backgroundSize: '100% 100%' }}></a>
            )) : <Skeleton active="true" />}
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </section>
    )
  }
}
