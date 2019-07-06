import React, { Component } from 'react';
import { RateContext } from './RateContext'
export default class RatePicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSearch: false,
            searchText: ''
        }
    }

    onChange = (ev) => {
        const searchText = ev.target.value
        this.setState({
            searchText
        })
    }
    onBlur = () => {
        this.setState({
            showSearch: false
        })
    }
    onClick = () => {
        this.setState({
            showSearch: true
        })
    }
    render() {
        const { list = [], rate = {} } = this.context
        const { showSearch = false, searchText = '' } = this.state
        let filteredResults = list.slice(0)
        let regex = ''
        if (searchText) {
            regex = new RegExp(searchText, 'ig')
            filteredResults = filteredResults.filter((item) => regex.test(item.id) || regex.test(item.symbol))
        }
        filteredResults.sort((a, b) => a.symbol < b.symbol ? -1 : 1)
        const setRate = this.context.setRate
        return (
            <div className="picker-container">
                {
                    !showSearch ? <span className="picked-display" onClick={this.onClick}>{rate.symbol}  <span className="fa fa-caret-down"></span></span> : (
                        <div className="picker">
                            <input onChange={this.onChange} value={this.state.searchText} />
                            <div className="picker-results">
                                {
                                    filteredResults.map((item) => {
                                        let name = item.id.split('-').join(' ')
                                        return (
                                            <div className="picker-option" key={item.id} onClick={() => {
                                                setRate(item)
                                                this.onBlur()
                                            }}>
                                                <span className="picker-name">
                                                    {name}
                                                </span>
                                                <span>{item.symbol}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
RatePicker.contextType = RateContext