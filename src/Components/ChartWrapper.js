import React, { Component } from 'react';
import { Chart } from 'react-charts'
export default class ChartWrapper extends Component {
    render() {
        const data = this.props.data
        const multiplier = this.props.multiplier || 1
        console.log(data)
        const updatedData = data.map(item => {
            return [item[0], parseFloat(item[1]) * 1 / multiplier]
        })
        return (
            <div className="chart-container">
                <div className="chart">
                    <Chart
                        data={[{
                            label: 'time vs price',
                            data: updatedData
                        }]}
                        axes={[
                            { primary: true, type: 'time', position: 'bottom' },
                            { type: 'linear', position: 'left' }
                        ]}
                        tooltip={true}
                    />
                </div>
                <span className="interval-btn" onClick={() => this.props.updateTimeSpan('1D')}>1D</span>
                <span className="interval-btn" onClick={() => this.props.updateTimeSpan('1W')}>1W</span>
                <span className="interval-btn" onClick={() => this.props.updateTimeSpan('1M')}>1M</span>
            </div>
        )
    }
}