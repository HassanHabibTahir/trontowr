<!-- import { environment } from "./environment"; -->
// import store from "./Store/store";

export const getUserData = async (tronWeb, defaultAddress) => {
  // console.log("here we goo", );
  await tronWeb
    .contract()
    .at(environment.contractAddress)
    .then(async (contract) => {
      //user address
  

      //user balance
    //   await tronWeb.trx.getBalance(defaultAddress).then((val) => {
    //     store.dispatch({
    //       type: "USER_WALLET_BALANCE",
    //       payload: tronWeb.fromSun(val),
    //     });
    //   });

    })

};

// export const investFun = async (contract, amount, tronWeb, tarrifUint) => {
  // console.log(
  //   "here is the user wallet address=======>",
  //   tronWeb.defaultAddress.base58
  // );
//   try {
//     let getDirectFromUrl;

//     let url = window.location.href;

//     if (url.includes("?ref=")) {
//       var last3 = url.split("#")[0];
//       let getAddress = last3.split("?ref=")[1];
//       getDirectFromUrl = getAddress;
//     }

    // await contract
    //   .deposit(
    //     tarrifUint,
    //     getDirectFromUrl ? getDirectFromUrl : environment.defaultRefAddress
    //   )
    //   .send({
    //     feeLimit: 100_000_000,
    //     callValue: tronWeb.toSun(amount),
    //   })
    //   .then((output) => {
    //     getUserData(tronWeb, tronWeb.defaultAddress.base58);
    //     console.log("successfully");
        // clickme("done");
        // store.dispatch({
        //   type: "DEPOSIT_DONE",
        // });
        // console.log("successfully deposited");
//       });
//   } catch (err) {
//     console.log("error", err);
//   }
// };

// export const withdrawFunct = async (contract, tronWeb) => {
//   try {
//     await contract
//       .withdraw()
//       .send()
//       .then(() => {
//         getUserData(tronWeb,tronWeb.defaultAddress.base58);
//         console.log("successfully");
//       });
//   } catch (err) {
//     console.log("err", err);
//   }
// };