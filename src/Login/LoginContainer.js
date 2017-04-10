import Login from './Login.js';
import { connect } from 'react-redux';
import * as actions from '../actions.js';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
