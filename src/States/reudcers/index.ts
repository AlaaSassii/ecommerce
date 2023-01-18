import { combineReducers } from "redux";
import shopCartReducer from './shopCardReducer' ; 

const reducers = combineReducers({
            shopCard:shopCartReducer 
            
})

export default reducers 