import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import SearchArea from '../components/SearchArea'
import retriveQuerys from '../reducers/search'

const mapStateToProps = state => ({
    querys: retriveQuerys(state)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchArea)