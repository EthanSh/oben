import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchItem extends Component {
    static propTypes = {
        addQuery: PropTypes.func.isRequired
    }

    state = {
        name: '',
        from: '',
        to: '',
        placeholder: 'Place input name here'
    }

    handleChange = ( e ) => {
        let key = e.target.name
        this.setState({ [key]: e.target.value })
    }

    handleSave = () => {
        if (this.state.name.length !== 0 && this.state.from.length !== 0 && this.state.to.length !== 0) {
            this.props.addQuery({
                name: this.state.name,
                from: this.state.from,
                to: this.state.to,
            })
            this.setState({
                name: '',
                from: '',
                to: '',
                placeholder: 'Place input name here'
            })
        }
    }

    render() {
        return (
            <div>
                <div>{this.state.name}{this.state.from}{this.state.to}</div>
                <input type="text" name="name" placeholder={this.state.placeholder} value={this.state.name} onChange={this.handleChange}/>
                <input type="date" name="from" value={this.state.from} onChange={this.handleChange}/>
                <input type="date" name="to" value={this.state.to} onChange={this.handleChange}/>
                <button onClick={this.handleSave}>Add</button>
            </div>
        )
    }
}
