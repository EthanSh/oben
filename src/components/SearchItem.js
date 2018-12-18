import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
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
            <Grid container spacing={24} justify="center" alignItems="center" alignContent="center">
                <Grid item >Input Stay Here:</Grid>
                <Grid item ><TextField placeholder={this.state.placeholder} value={this.state.name} onChange={this.handleChange('name')}/></Grid>
                <Grid item ><TextField type="date"  value={this.state.from} onChange={this.handleChange('from')}/></Grid>
                <Grid item ><TextField type="date"  value={this.state.to} onChange={this.handleChange('to')}/></Grid>
                <Grid item ><Fab size="small" color="primary" aria-label="Add" onClick={this.handleSave}>
                    <AddIcon></AddIcon>
                </Fab></Grid>
            </Grid>
        )
    }
}
