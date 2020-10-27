import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TronApi from './tronweb/troapi';

import  {userData,WalletAddress} from '../actions/waletaction';

function LayoutShark() {
    const wallet = useSelector(state => state.walletbalnce)
    const {balance}= wallet
console.log("walletbaance", balance)
    const [tronweb, setTronWeb] = useState('')
    const [Adress, setAdress] = useState(null)
    const [loading, setLoading] = useState(false)
    // const [balacne, setBalance] = useState('')
 const [maxbalance,SetMaxbalance] = useState('')

 const [chandebalnce,SetChangedbalance]= useState(100)
    const dispatch = useDispatch()

console.log("chandadfasdfasdfasdf",chandebalnce)


    // const SetMaxValues =()=>{
    //     SetMaxbalance(balance)

    // }

    
    console.log("maxbalance",maxbalance)
    useEffect(() => {
        const tronLoader = setInterval(() => {
            if (window.tronWeb && window.tronWeb.ready) {
                setTronWeb(window.tronWeb);
                clearInterval(tronLoader);
            }
        }, 500);
    }, []);



    useEffect(() => {
        if (tronweb && tronweb.ready) {
            setAdress(tronweb.defaultAddress.base58)
            setInterval(()=>{
                dispatch(WalletAddress(tronweb.defaultAddress.base58,window.tronWeb,window.tronWeb))
              
            },1000)
       
        }
    }, [tronweb])



 

 
// console.log("balance",tronweb.defaultAddress)

    const MenuHandler = () => {

        const meunuHandler = document.querySelector('.menu-modals');
        meunuHandler.classList.add("active")

        console.log(meunuHandler)
    }


    const MenuCloseHandler = () => {
        const meunuHandler = document.querySelector('.menu-modals');
        meunuHandler.classList.remove("active")

    }


    const openShareLanguageHandler = () => {
        const languageSharHan = document.querySelector('.language-share-modal');
        languageSharHan.classList.add("active")
        const meunuHandler = document.querySelector('.menu-modals');
        meunuHandler.classList.remove("active")

    }

    const closeSharelanguageHandler = () => {
        const languageSharHan = document.querySelector('.language-share-modal');
        languageSharHan.classList.remove("active")

    }

    console.log(Adress)


    
const setValues=(e)=>{
console.log("changevaluess",e)
}


    return (
        <>
            <div className="app">
                <main className="main">

                    <header className="header">
                        <div className="container">
                            <a href="" className="logo">
                                <img src="/static2/img/png/trontower.png" alt="" />
                            </a>
                            <menu className="menu m-none">
                                <div>


                                </div>
                                <ul className="soc">

                                    <li onClick={openShareLanguageHandler}>
                                        <a href="#"  >
                                            <img src="/static/img/svg/main/tl_white.svg" alt="" />
                                        </a>
                                    </li>

                                </ul>

                                <button className="button blue" >
                                    <img
                                        src="/static/img/svg/main/user.svg" alt=""


                                        style={{ marginLeft: "0", marginRight: "15px" }}
                                    />

                                    {tronweb && tronweb.ready ? tronweb.defaultAddress.base58.slice(0, 4) + "...." + tronweb.defaultAddress.base58.slice(30, 34) : "unlock wallet"}

                                </button>
                            </menu>
                            {/* <button className="burger d-none" onClick={MenuHandler} >
                                <img src="/static/img/svg/burger.svg" alt="" />
                            </button> */}
                        </div>
                    </header>
                    <section class="global_section">
                        <div class="container">
                            <div class="global_section__left" style={{ flex: 1 }}>
                                <h2>INVEST TRON (TRX) AND GET INCREDIBLE
PROFIT FOR UNLIMITED TIME!</h2>

                            </div>
                            <div class="center_sharp">
                                <div class="logo_sharp">
                                    <svg class="progress-ring">
                                        <circle

                                            stroke-width="8"
                                            fill="transparent"
                                            stroke="transparent"
                                            r="136"
                                            cx="130"
                                            cy="130"
                                        />
                                        <circle
                                            class="progress-ring__circle"
                                            stroke-width="6"
                                            fill="transparent"
                                            filter="url('#filter3_d')"
                                            stroke="url('#paint3_linear')"
                                            r="136"
                                            cx="142"
                                            cy="140"
                                        />
                                        <defs xmlns="http://www.w3.org/2000/svg">
                                            <filter xmlns="http://www.w3.org/2000/svg" id="filter2_d" x="0.500031" y="0.92334"
                                                width="273.153" height="273.153" filterUnits="userSpaceOnUse"
                                                color-interpolation-filters="sRGB">

                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow"
                                                    result="shape" />
                                            </filter>


                                        </defs>
                                    </svg>




                                    <div className="center_image" >
                                        <img style={{ width: "160px", height: "160px" }} src="/static2/img/png/favi.png" />

                                    </div>


                                </div>




                                {/* <div class="center_sharp__stat d d-none" v-if="user">
                              <h2>EVERY SECOND DIVIDEND OF INVESTMENT AND WITHDRAW INVESTED TRX AT ANY TIME</h2>
                                </div> */}

                            </div>
                            <div class="global_section__right m-none" style={{ flex: "1" }}>
                            
                            <h2>EVERY SECOND DIVIDEND OF INVESTMENT AND WITHDRAW INVESTED TRX AT ANY TIME</h2>

                            </div>
                        </div>
                    </section>


                    <section class="all">
                        <div class="container">
                            <h3>INVESTMENT OF TRON (TRX) </h3>
                            <div class="panel">
                                <div class="panel__left">
                                    <div class="panel__left__header">
                            <h4>YOUR WALLET BALANCE</h4>
                       
                                        <h4 v-if="user">
                            <img src="/static/img/svg/main/tron.svg" alt="" /><span>{balance?balance:"loading..."}{" "}TRX</span>
                                        </h4>
                                 
                                        {/* <button style={{ height: "33px", minheight: "33px", padding: "0rem 3rem" }} class="button green">login
                                </button> */}
                                    </div>
                                    <div class="panel__content">
                                        <div class="min">
                                            <label for="">Enter the stake amount </label>
                                            <span>min: <b>50TRX</b></span>
                                        </div>
                                        <div class="input">
                                            <input type="text" onChange={(e) => SetChangedbalance(e.target.value)}   value={maxbalance?maxbalance:chandebalnce}/>
                                            <span>TRX</span>
                                            <button onClick={()=>SetMaxbalance(balance-10)}  >max</button>
                                        </div>
                                        <table>
                                            <caption>Profitability </caption>
                                            <tbody>
                                                <tr>
                            <td>PER HOUR </td>
                                                    <td>
                                                    {(chandebalnce/100)*5} TRX
                                                    
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Per day</td>
                                                    <td>
                                                    TRX
                                           
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Per 10 days</td>
                                                    <td>
                                                    TRX
                                      
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button class="button green">Stake TRX <img
                                            src="/static/img/svg/arrow.svg" alt="" /></button>
                
                                    </div>
                                </div>
                                <div class="panel__right">
                                    <div class="panel__right__header">
                                        <div>
                                            {/* <h3 class="d-none">shark</h3> */}
                                            <img  style={{width:"100px", height:"100px"}} src="/static2/img/png/favi.png" alt="" />
                                            {/* <h3 class="d-none">mining</h3> */}
                                        </div>
                                        <div>
                                            <h5>YOUR STAKE</h5>

                                            <a href="">unstake</a>
                                        </div>
                                    </div>
                                    <div class="panel__content">
                                        <h3>shark token balance</h3>

                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td>

                                                        <span class="text-blue"> TRX</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Per day</td>
                                                    <td>

                                                        <span class="text-blue">TRX</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Per 10 days</td>
                                                    <td>

                                                        <span class="text-blue"> TRX</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button class="button blue">withdraw tokens <img
                                            src="/static/img/svg/arrow.svg" alt="" /></button>
                                      
                                    </div>
                                </div>
                            </div>
                            <h3>income from your referrals</h3>
                            <div class="ref">
                                <div class="ref__left">
                                    <h4>your referral link</h4>
                                    <input type="text" />
                                    <button class="button blue-white">copy link <img
                                        src="/static/img/svg/arrow.svg" alt="" /></button>
                                    <p>With this referral link, you can invite new users and receive Shark tokens as rewards </p>
                                    <p class="text-uppercase fz14 fw500">the reward is 10 % of the SRX mined by your referrals</p>
                                </div>
                                <div class="ref__right">
                                    <div class="ref__right-content">
                                        <h4>available reward</h4>
                                        <h3>[referralMoney] <span>SRX</span></h3>
                                        <button class="button green" >withdraw to the wallet <img
                                            src="/static/img/svg/arrow.svg" alt="" /></button>
                                    </div>
                                    <div class="ref__right-footer">
                                        <h4>total referrals: <b>[count_ref]</b></h4>
                                        <a href="" data-toggle="referral" v-if="user">referral statistics</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </section>


                </main>



                <footer>
                    <div class="container">
                        <a class="logo">
                            <img style={{ marginTop: "12px" }} src="/static2/img/png/trontower.png" alt="" />
                        </a>

                        <div class="soc">
                            <li><a href="#">
                                <img src="/static/img/svg/main/tw.svg" alt="" />
                            </a></li>
                            <li onClick={openShareLanguageHandler}><a href="#"
                            >
                                <img src="/static/img/svg/main/tl.svg" alt="" />
                            </a></li>
                     
                        </div>
                        <a href="" class="copyright">Copyright © All rights reserved</a>
                    </div>
                </footer>






                <div className="modal  language-share-modal" data-modal="soc">
                    <div className="modal__container modal-soc">
                        <button className="close" onClick={closeSharelanguageHandler} >
                            <img src="/static/img/svg/main/close.svg" alt="" /></button>
                        <div className="container">
                            <h2>contact us</h2>
                            <ul>
                                <li onclick="window.open('https://telegram.me/Shark_Tron')">
                                    <i><img src="/static/img/flags/en.png" alt="" /></i>
                                    <div>
                                        <h3>english</h3>
                                        <h5>telegram group</h5>
                                        <h4>@Shark_Tron</h4>
                                    </div>
                                </li>
                                {/* <li onclick="window.open('https://t.me/Shark_Persian')">
                                    <i><img src="/static/img/flags/fa.png" alt="" /></i>
                                    <div>
                                        <h3>iranian</h3>
                                        <h5>telegram group</h5>
                                        <h4>@Shark_Persian</h4>
                                    </div>
                                </li>
                                <li onclick="window.open('https://t.me/Shark_chinese')">
                                    <i><img src="/static/img/flags/zh-hans.png" alt="" /></i>
                                    <div>
                                        <h3>chinese</h3>
                                        <h5>telegram group</h5>
                                        <h4>@Shark_chinese</h4>
                                    </div>
                                </li>
                                <li onclick="window.open('https://t.me/Shark_Spanish')">
                                    <i><img src="/static/img/flags/es.png" alt="" /></i>
                                    <div>
                                        <h3>spanish</h3>
                                        <h5>telegram group</h5>
                                        <h4>@Shark_Spanish</h4>
                                    </div>
                                </li>
                                <li onclick="window.open('https://t.me/Shark_Tron_Philippines')">
                                    <i><img src="/static/img/flags/ph.png" alt="" /></i>
                                    <div>
                                        <h3>Philippines</h3>
                                        <h5>telegram group</h5>
                                        <h4>@Shark_Tron_Philippines</h4>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>



                {/* <div className="modal menu-modals" data-modal="menu">
                    <div className="modal__container modal-menu">
                        <button className="close" onClick={MenuCloseHandler}   ><img src="/static/img/svg/main/close.svg" alt="" /></button>
                        <div className="container">
                            <div className="wallet_info">
                            
                                <button className="button green"  >

                                  {tronweb && tronweb.ready ? tronweb.defaultAddress.base58.slice(0, 4) + "...." + tronweb.defaultAddress.base58.slice(30, 34) : "unlock wallet"}

                                    </button>
                            </div>
                     
                            <ul className="soc">
                                <li onclick="#"><a href="#" >
                                    <img src="/static/img/svg/main/tw.svg" alt="" />
                                </a>
                                </li>
                                <li>
                                    <a href="#"
                                        onClick={openShareLanguageHandler}>
                                        <img src="/static/img/svg/main/tl.svg" alt="" />
                                    </a>
                                </li>

                            </ul>
                            <a href="#" className="copyright">Copyright © All rights reserved</a>
                        </div>
                    </div>
                </div> */}



            </div>
        </>
    );
}

export default LayoutShark;
