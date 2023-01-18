import { Actions , product , ActionTypes} from "../reudcers/shopCardReducer";
import { Dispatch } from "redux";


export const addProduct = (product: product ) =>{
            return(dispatch:Dispatch<Actions>)=>{
                        return dispatch({type:ActionTypes.ADD_PRODUCT , payload:product})
            }
}

export const removeProduct = (product: number ) =>{
            return(dispatch:Dispatch<Actions>)=>{
                        return dispatch({type:ActionTypes.REMOVE_PRODUCT , payload:product})
            }
}
export const addAmount = (product: number ) =>{
            return(dispatch:Dispatch<Actions>)=>{
                        return dispatch({type:ActionTypes.ADD_AMOUNT , payload:product})
            }
}
export const removeAmount = (product: number ) =>{
            return(dispatch:Dispatch<Actions>)=>{
                        return dispatch({type:ActionTypes.REMOVE_AMOUNT , payload:product})
            }
}