import { createStore } from 'redux';
import passwordReducer from './reducers/passwordReducer';

const store = createStore(passwordReducer);

export default store