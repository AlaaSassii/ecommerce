export enum ActionTypes {
            REMOVE_PRODUCT = "remove_product" , 
            ADD_AMOUNT = "addAmount" , 
            REMOVE_AMOUNT = "removeAmount" ,
            ADD_PRODUCT = "add_product" , 
}
export interface product {
            id : number 
            name : string 
            image : string 
            price : number 
            amount : number 
}
interface addP {
            type : ActionTypes.ADD_PRODUCT
            payload:product 
}
interface removeP {
            type : ActionTypes.REMOVE_PRODUCT 
            payload : number 
}
interface addAmo {
            type : ActionTypes.ADD_AMOUNT 
            payload : number 
}
interface removeAmo { 
            type: ActionTypes.REMOVE_AMOUNT 
            payload : number 
}
const intialState:product[] = [] ; 
export type Actions = addP | removeP | addAmo|  removeAmo ; 
const reducer = (state:product[] = intialState , action:Actions ) =>{

            switch(action.type){
                        case ActionTypes.ADD_PRODUCT :
                                    return [...state , {...action.payload , amount:1}] ; 
                        case ActionTypes.REMOVE_PRODUCT : 
                                    return state.filter(prod => prod.id !== action.payload) ; 
                        
                        case ActionTypes.ADD_AMOUNT : 
                                    return state.map(prod => {
                                                if(prod.id === action.payload)
                                                            return {...prod , amount:prod.amount + 1} 
                                                return prod 
                                    })
                        case ActionTypes.REMOVE_AMOUNT  : 
                        return state.map(prod => {
                                    if(prod.id === action.payload)
                                                return {...prod , amount:prod.amount - 1} 
                                    return prod 
                        })
                        default :
                                    return state ; 

            }
}
export default reducer ; 
// case "total"  :
// return  state.reduce((total , state)=>{
//             total += state.price * state.amount ; 
//             return total 
// },0)