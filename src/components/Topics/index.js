import React, { Component } from 'react'
import './index.scss'
import { Skeleton } from 'antd'

export default class Topics extends Component {
  render() {
    const { market_topic } = this.props
    return (
      <section className="topics">
        <div className="topics-header">{market_topic ? market_topic.title : ''}</div>
        <div>
          <ul className="topics-list">
            {market_topic && market_topic.data.topic_list ? market_topic.data.topic_list.map((item, index) => (
              <a key={index} href={item.link}>
                <li className="topic-item">
                  <div className="topic-photo">
                    <div className="_3kP-rt0_ _37xwNlCe">
                      <i className="_2AmRNPt0" style={{ 'marginTop': '100%' }}></i>
                      <div className="_1uN_mkij" style={{ 'backgroundImage': `url(${item.img})`, 'backgroundSize': 'cover', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center center' }}></div>
                    </div>
                  </div>
                  <div className="topic-content">
                    <div className="topic-title">{item.title}</div>
                    <div className="topic-desc">{item.desc}</div>
                  </div>
                </li>
              </a>
            )) : <Skeleton active="true" />}

          </ul>
        </div>
      </section>
    )
  }
}
