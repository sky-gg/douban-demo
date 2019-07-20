import React, { Component } from 'react';
import PropTypes from 'prop-types';
const Nav = () => {
  const props = {
    className: 'love',
    id: 'deskmate',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg'
  };
  return (
    <img {...props} />
  )
}

class TestCom extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    name: '我喜欢你'
  }
  static propTypes = {
    // name: PropTypes.string,
    // name: PropTypes.number,
    // name: PropTypes.bool,
    // name: PropTypes.object,
    // name: PropTypes.func,
    // name: PropTypes.array,
    // name: PropTypes.symbol,
    // name: PropTypes.any,
    name: PropTypes.any.isRequired,
  }
  render() {
    return (
      <main>
        {this.props.name}
        <Nav />
      </main>
    )
  }
}
export default TestCom;
TestCom.propTypes = {
  name: PropTypes.string // number
}