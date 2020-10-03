import { combineReducers } from 'redux';
import HomeReducer from './homeReducer';

import {reducer as formReducer} from 'redux-form';

const combineRed = combineReducers({
    HomeReducer,
    form: formReducer
});

export default combineRed;