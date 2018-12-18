import React from 'react'
import PropTypes from 'prop-types'
import * as MealFilters from '../constants/MealFilters'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Filter = ({filter}) => (
    <Grid container  spacing={24} justify="center" alignItems="center" alignContent="center">
        <Grid item><Button variant="outlined" color="primary" onClick={()=> filter(MealFilters.SHOW_ALL)}>showall</Button></Grid>
        <Grid item><Button variant="outlined" color="secondary" onClick={()=> filter(MealFilters.SHOW_COMPLETED)}>show completed</Button></Grid>
        <Grid item><Button variant="outlined" onClick={()=> filter(MealFilters.SHOW_ACTIVE)}>show active</Button></Grid>
    </Grid>
)

Filter.propTypes = {
	filter: PropTypes.func.isRequired
}

export default Filter