import React, { Component } from 'react'
import './index.scss'
import { Skeleton } from 'antd'

export default class MarketGroup extends Component {
  render() {
    const { market_group } = this.props
    return (
      <section className='group'>
        <div className='group-header'>{market_group ? market_group.title : ''}</div>
        <div className='group-topic-list'>
          {market_group && market_group.data.topics ? market_group.data.topics.map((item, index) => (
            <div className='group-topic-item' key={index}>
              <a href={'https://m.douban.com/group/topic/' + item.id} rel='noopener noreferrer' target='_blank'>
                <div className='group-topic-content'>
                  <div className='group-topic-hot'><em>{item.hot_amount}</em></div>
                  <h3 className='group-topic-title'>{item.title}</h3>
                </div>
                <div className='group-topic-detail'>
                  <div className='group-topic-time'>{item.update_time}</div>
                </div>
              </a>
            </div>
          )) : <Skeleton active='true' />}
        </div>
        <div className='group-topic-more'>
          <a href='https://m.douban.com/group/588598' rel='noopener noreferrer' target='_blank'>查看更多讨论</a>
        </div>
      </section>
    )
  }
}
