import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import SearchArea from '../components/SearchArea'
import retriveMeals from '../reducers/meals'

const mapStateToProps = state => ({
    filteredMeals: retriveMeals(state)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchArea)