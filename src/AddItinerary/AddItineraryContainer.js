import AddItinerary from './AddItinerary.js';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(null, mapDispatchToProps)(AddItinerary)
