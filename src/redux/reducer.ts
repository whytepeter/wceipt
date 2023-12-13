import { combineReducers } from 'redux';
import { persistedReducer } from './entities';

export default combineReducers({
  entities: persistedReducer,
});
