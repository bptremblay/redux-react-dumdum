import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../actions'
import HomePanel from '../../components/home-panel';

// This is a component.
const Home = props => (
  <div>
    <HomePanel mappedProps={props} />
  </div>
)

// This one is easy because names are same.
const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

// Feeds the actions into the props!
const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

// Exports a connected component.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
