import { combineReducers } from "redux";
import { operationsReducer } from "./todolist/reducers/operations";
import {useMemo} from 'react';
export const rootReducer=combineReducers({
    operationsReducer,
    
    //more reducers can be added here
});