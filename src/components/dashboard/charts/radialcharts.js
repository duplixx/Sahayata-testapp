import React from 'react'
import Chart from 'react-apexcharts'
class Radial extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          labels: ['RadialBar'],
          plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                }
            },
          },
        },
        series: [68],
      }
    }
    
    render() {
      return (
        <Chart options={this.state.options} series={this.state.series} type="radialBar"  height={320} />
      )
    }
  }
export default Radial;