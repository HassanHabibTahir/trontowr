import {environment} from './enviroment';
export const userData = async (defaultAddress ,tronWeb) => {
    await tronWeb
        .contract()
        .at(environment.contractAddress)
        .then(async (contract) => {
            console.log(contract)
            // contract.getUserPercentRate(environment.contractAddress)
        // .call()
        // .then((val)=>console.log(val))
        
        }
        // ({})
        
 )

}


//  export const WalletAddress = async (defaultAddress,tronWeb ) => {

//     // console.log(defaultAddress,tronWeb );
//     await tronWeb
//       .contract()
//       .at(environment.contractAddress)
//       .then(async (contract) => {
    
//         await tronWeb.trx.getBalance(defaultAddress).then((val) => {
//             // console.log("utility", tronWeb.fromSun(val))

//        console.log(tronWeb.fromSun(val))
//         });
  
//       })
  
//   };

// export const WalletAddress = async(defaultAddress, tronWeb)=>{
   
//     console.log("defaultAddrsss",defaultAddress)
//     await tronWeb.trx.getBalance(defaultAddress).then((val) => {

//      console.log(val) 
        
//     })
// }







// await tronWeb.trx.getBalance(defaultAddress).then((val) => {


// await tronWeb.trx.getBalance(defaultAddress).then((val) => {