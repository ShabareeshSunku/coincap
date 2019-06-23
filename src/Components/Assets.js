import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAssets } from '../actions'

class Assets extends Component {
    componentDidMount() {
        this.props.fetchAssets()
    }
    render() {
        const assets = this.props.assets
        const { items = [], loading = false } = assets
        const headings = ['Rank', 'Name', 'Price', 'Market Cap', 'VWAP(24Hr)', 'Supply', 'Volume(24Hr)', 'Change(24Hrs)']
        return (
            <div className='list-container'>
                {
                    loading ? <div className="loader"></div> : (
                        <table>
                            <thead>
                                <tr>
                                    {
                                        headings.map((heading, index) => (
                                            <th
                                                className={heading === 'Rank' ? 'align-center' : ''}
                                                key={'' + index}>
                                                {heading}
                                            </th>
                                        ))
                                    }
                                </tr>
                                {
                                    items.map((item, index) => {
                                        return (
                                            <tr key={'' + index}>
                                                <td className="align-center">{item.rank}</td>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>{item.marketCap}</td>
                                                <td>{item.vwap24Hr}</td>
                                                <td>{item.supply}</td>
                                                <td>{item.volume}</td>
                                                <td>{item.change}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </thead>
                        </table>
                    )
                }
            </div>
        )
    }
}
const mapStateToProps = (state = {}) => {
    return {
        assets: state.assets || {}
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAssets: () => dispatch(fetchAssets())
    }
}
const ConnectedAssets = connect(mapStateToProps, mapDispatchToProps)(Assets)

export default ConnectedAssets