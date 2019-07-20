import React, { Component } from 'react'
import './index.scss'
import { Skeleton } from 'antd'

export default class ProductList extends Component {
  render() {
    const { market_newproducts } = this.props
    return (
      <section className='product-list'>
        <div className='product-list-header'>{market_newproducts ? market_newproducts.title : ''}</div>
        <ul className='product-list-content'>
          {!market_newproducts ? <Skeleton active='true' /> : market_newproducts.data.product_items.map((item, index) => (
            <li className='product-list-item' key={index} >
              <div className='product-card'>
                <a href={item.url}>
                  <div className='_3kP-rt0_ product-card-cover'>
                    <i className='_2AmRNPt0' style={{ marginTop: '100%' }}></i>
                    <div className='_1uN_mkij' style={{ backgroundImage: `url(${item.image})`, 'backgroundSize': 'cover', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center center', }}></div>
                  </div>
                  <div className='product-card-info'>
                    <p className='product-card-title'>{item.title}</p>
                    <div className='product-card-desc'>{item.desc}</div>
                    <div className='product-card-bottom'>
                      <span className='product-card-promote'>{item.price_range}</span>
                      {item.tags && item.tags.length !== 0 && <span className="product-card-tag">{item.tags[0].text}</span>}
                    </div>
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}
