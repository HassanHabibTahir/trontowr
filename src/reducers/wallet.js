import {WALLET_BALLANCE} from '../actions/type';
const intialState={
balance:'',
}

function Wallet (state=intialState, action){
switch(action.type){
    
case WALLET_BALLANCE:
 
console.log(" reducer",action.payload)
return{
    ...state,
     balance:action.payload
 }
 default:{
     return state
 }
}

}

export {Wallet};