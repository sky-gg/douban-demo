import React, { Component } from 'react';
import axios from 'axios'

import './index.scss';

import Swipers from '@/components/Swiper'
import UserBar from '@/components/UserBar'
import ProductList from '@/components/ProductList'
import MarketGroup from '@/components/MarketGroup'
import Topics from '@/components/Topics'
import Bottom from '@/components/Bottom'
// import Footer from '@/components/Footer'

import { BackTop } from 'antd'

// const List = () => (
//   <u>
//     <li>你好00(1)</li>
//     <li>你好00(2)</li>
//     <li>你好00(3)</li>
//   </u>
// )

// const Item = () => {
//   const arr = [
//     { id: 0, text: '个人中心' },
//     { id: 1, text: '主页' },
//   ];
//   return (
//     <ul>
//       {
//         arr.map((item) => <li key={item.id}>{item.text}</li>)
//       }
//     </ul>
//   )
// }

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // actived: 0,
      market_banner: null,
      market_people: null,
      market_newproducts: null,
      market_group: null,
      market_topic: null,
    }
  }
  navClick(id) {
    this.setState({
      actived: id
    })
  }
  componentDidMount() {
    axios.get('/modules?t=' + Date.now()).then(res => {
      let data = res.data.data.modules
      this.setState({
        market_banner: data[0],
        market_people: data[1],
        market_newproducts: data[2],
        market_group: data[3],
        market_topic: data[4],
      })

    }).catch(error => {
      // eslint-disable-next-line no-console
      console.log(error)
    })
  }
  render() {
    const {
      // actived,
      market_banner,
      market_people,
      market_newproducts,
      market_group,
      market_topic
    } = this.state
    // const arr = [
    //   { id: 0, text: '个人中心' },
    //   { id: 1, text: '主页' },
    // ]
    return (
      <div className='home'>
        <Swipers market_banner={market_banner} />
        <UserBar market_people={market_people} />
        <ProductList market_newproducts={market_newproducts} />
        <MarketGroup market_group={market_group} />
        <Topics market_topic={market_topic} />
        <Bottom />
        <BackTop />
        {/* <Footer
          arr={arr}
          actived={actived}
          onNavClick={this.navClick.bind(this)}
        /> */}
        {/* <List /> */}
        {/* <Item /> */}
      </div>
    );
  }
}

export default Home;
