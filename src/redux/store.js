import { createStore } from 'redux';
import dashboardReducer from './reducer.js';

const store = createStore(dashboardReducer);

export default store;
