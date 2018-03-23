import tasksReducer from '../features/tasks/redux/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    tasks: tasksReducer
});
