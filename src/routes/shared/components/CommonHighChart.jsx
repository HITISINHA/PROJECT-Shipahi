import React, {Component} from 'react'
import PropTypes from 'prop-types'
import autobind from 'react-autobind'
import ReactHighcharts from 'react-highcharts'

ReactHighcharts.Highcharts.setOptions({
  credits: {
    enabled: false
  }
})

const propTypes = {
  config: PropTypes.object.isRequired
}
const defaultProps = {
  ref: '',
  noDataMsg: 'No Data Found'
}

class HighChartPainter extends React.Component {
  constructor (props) {
    super(props)
    autobind(this)
  }

  render () {
    return (
      <div>
        {(this.props.config.series && this.props.config.series.length > 0)
                ? <ReactHighcharts config={this.props.config} ref={this.props.ref} />
                : <div className='centered'> <p>{this.props.noDataMsg}</p></div>
                }
      </div>
    )
  }
}

HighChartPainter.propTypes = propTypes
HighChartPainter.defaultProps = defaultProps

export default HighChartPainter
