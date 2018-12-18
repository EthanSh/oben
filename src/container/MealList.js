import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import ResultList from '../components/ResultList'
import { getMeals } from '../selectors'

const mapStateToProps = state => ({
    meals: getMeals(state)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultList)