
import {environment} from '../components/tronweb/enviroment';
import {WALLET_BALLANCE} from "./type";
const WalletAddress = (defaultAddress,tronWeb ) => async (dispatch)=>{

    await tronWeb
      .contract()
      .at(environment.contractAddress)
      .then(async (contract) => {
    
        await tronWeb.trx.getBalance(defaultAddress).then((val) => {

dispatch({
  type:WALLET_BALLANCE,
  payload:tronWeb.fromSun(val)
})
     
        });
  
      })
  
  };
export {WalletAddress}