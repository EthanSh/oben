import React from 'react'
import PropTypes from 'prop-types'

const Meal = ({meal, complete}) => {
    let date = new Date(meal.date)

    date = date.getMonth()+1 +'-'+date.getDay() + '-' + date.getFullYear()

    let id = meal.id

    return (

        <li>
            <input type="checkbox" checked={meal.completed} onChange={() => complete(id)}/>
            <div className="Meal">{meal.type} for {meal.name} on {date}</div>
        </li>

    )
}

Meal.propTypes = {
	meal: PropTypes.object.isRequired
}

export default Meal