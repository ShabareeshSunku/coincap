import React, { Component } from 'react';
import { RateContext } from './RateContext'
export default class RatePicker extends Component {

    onChange = (ev) => {
        const list = this.context.list
        const selectedIndex = ev.target.value
        const rate = list[selectedIndex]
        this.context.setRate(rate)
    }
    render() {
        const { list = [] } = this.context
        return (
            <span>
                <select onChange={this.onChange}>
                    {
                        list.map((item, index) => {
                            const name = item.id.split('-').join(' ')
                            const markup = `
                                <div className="picker-option">
                                    <span className="picker-symbol">${item.symbol}</span>
                                    <span className='picker-name'>${name}</span>
                                </div>
                            `
                            return (
                                <option value={index} key={item.id} dangerouslySetInnerHTML={{ __html: markup }} />
                            )
                        })
                    }
                </select>
            </span>
        )
    }
}
RatePicker.contextType = RateContext