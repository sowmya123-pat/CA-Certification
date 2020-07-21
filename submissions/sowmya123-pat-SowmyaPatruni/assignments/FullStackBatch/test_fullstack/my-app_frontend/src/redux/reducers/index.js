import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';

const RootReducer = combineReducers({
  form: reducerForm
});

export default RootReducer;