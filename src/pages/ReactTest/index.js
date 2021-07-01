// eslint-disabled-next-line
import React, {
  Component
} from 'react';
import DatePicker from '@/components/datePicker'
import PropTypes from 'prop-types';

class TestCom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date(),
      isOpen: true,
      theme: 'android',
      customHeader: '出生日期'
    }
  }
  render() {
    let { time, isOpen, theme, customHeader } = this.state
    return (
      <DatePicker
        value={time}
        isOpen={isOpen}
        theme={theme}
        customHeader={customHeader}
        dateConfig={{
          'year': {
            format: 'YYYY',
            caption: '年',
            step: 1,
          },
          'month': {
            format: 'M',
            caption: '月',
            step: 1,
          },
          'date': {
            format: 'D',
            caption: '日',
            step: 1,
          },
        }}

      ></DatePicker>
    )
  }
}
export default TestCom;
TestCom.propTypes = {
  name: PropTypes.string // number
}