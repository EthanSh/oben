import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Meal = ({meal, complete}) => {
    let date = new Date(meal.date)
    console.log(meal.date)
    date = (date.getMonth()+1) + '-'+ (date.getDate()-1) + '-' + date.getFullYear()

    let id = meal.id

    return (
        <div>
            <ListItem>
                {/*<input type="checkbox" checked={meal.completed} onChange={() => complete(id)}/>*/}
                <Checkbox checked={meal.completed} onChange={() => complete(id)}/>
                {/*<div className="Meal"></div>*/}
                <ListItemText primary={`${meal.type} for ${meal.name} on ${date}`} />
            </ListItem>
            <Divider />
        </div>
    )
}

Meal.propTypes = {
	meal: PropTypes.object.isRequired
}

export default Meal