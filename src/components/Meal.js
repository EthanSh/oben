import React from 'react'
import PropTypes from 'prop-types'

const Meal = ({meal}) => {
    let date = new Date(meal.date);
    date = date.getMonth()+1 +'-'+date.getDay() + '-' + date.getFullYear()

    return (

        <li>
            {meal.type} for {meal.name} on {date}
        </li>

    )
}

Meal.propTypes = {
	meal: PropTypes.object.isRequired
}

export default Meal