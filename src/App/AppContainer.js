import App from './App.js';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
  return state
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch)
// }

export default connect(mapStateToProps)(App)
