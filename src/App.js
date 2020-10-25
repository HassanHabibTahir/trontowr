import logo from './logo.svg';
import './App.css';

function App() {


const togleSignUpMenu = ()=>{

const gettoogle = document.querySelector('.login-signin');
gettoogle.classList.add("active")

// classList.remove("open")
}


const CloseLogin = ()=>{
  const gettoogle = document.querySelector('.login-signin');
  gettoogle.classList.remove("active")
}


const HandlerFlagmenu = ()=>{
  const languaget = document.querySelector('.language_modal');
  languaget.classList.add("active")
}
const FlagCloseHandler = ()=>{
  const languaget = document.querySelector('.language_modal');
  languaget.classList.remove("active")

}

  return (
   <>
    <div  className="app">
    <main className="main">

<header className="header">
                <div className="container">
                    <a href="" className="logo">
                    <img src="/static/img/svg/logo.svg" alt=""/>
                </a>
                    <menu className="menu m-none">
                        <div>
                            <a href="https://justswap.org/?lang=en-US#/home?tokenAddress=TLWAwUn79CVehz91A4J9nbh6SPPvDdhba1&type=swap" target="_blank">trade swd</a>
                            <a target="_blank" href="/static/whitepaper.pdf">whitepaper</a>
                        </div>
                        <ul className="soc">
                            <li><a href="https://twitter.com/shark_tron" target="_blank">
                            <img src="/static/img/svg/main/tw_white.svg" alt=""/>
                        </a></li>
                            <li data-toggle="soc">
                                <a href="#" target="_blank">
                                <img src="/static/img/svg/main/tl_white.svg" alt=""/>
                            </a>
                            </li>
                            <li  >
                                <a href="#" data-toggle="lang" className="lang" onClick={HandlerFlagmenu}  >
                                <img src="/static/img/flags/en.png" alt=""/>
                            </a>
                            </li>
                        </ul>
                        {/* data-toggle={"user" ?'' : 'login'} */}
                        <button className="button blue" onClick={togleSignUpMenu} >
                          <img
                            src="/static/img/svg/main/user.svg" alt=""

                        
                            style={{marginLeft:"0", marginRight:"15px"}}
                            />
                           unlock wallet
                    </button>
                    </menu>
                    <button className="burger d-none" data-toggle="menu">
                    <img src="/static/img/svg/burger.svg" alt=""/>
                </button>
                </div>
            </header> 
            <div className="global_section defi">


            <div className="container container__header">
                    <div className="total_staked m-none" v-if="total_staked.srx > 0">
                        <h2 className="text-right">total staked now</h2>
                        <h3 className="text-right">[parseFloat(882806+ total_staked.srx).Crop(2)] <span>SRX</span></h3>
                        <h3 className="text-right">[parseFloat(657076 + total_staked.trx - 107000000).Crop(2)] <span>TRX</span>
                        </h3>
                        <h3 className="text-right">[parseFloat(70635 +total_staked.tth).Crop(2)] <span>TTH</span></h3>
                    </div>
                    <div className="curses_d m-none" style={{position:"absolute", top :"23px", right:"15px",fontWeight:"500", fontSize: "14px",color:"#8990f7"}}>
                        <span style={{marginRight: "57px"}}>1 SWD ~ [price_token_trx] TRX</span>
                        <span>1 SWD ~ [price_token] USDT</span>
                    </div>
                    <div className="b d-none">
                        <img src="/static/img/png/2.gif" alt=""/>
                    </div>

                    <img className="d-none" src="/static/img/png/1.gif" alt=""/>
                    <img className="animate1 m-none" src="/static/img/png/1.gif" alt=""/>

                    <h2>sword token</h2>
                    <h3>mining has already started</h3>
                    <h4 className="d-none">1 swd =[price_token_trx] trx</h4>
                    <div className="progress">
                        <div className="b m-none">
                            <img src="/static/img/png/2.gif" alt=""/>
                            <img src="/static/img/png/3.gif" alt=""/>
                        </div>
                        <img src="/static/img/svg/m.svg" alt=""/>
                        <div className="progress__title">level [currentLvl] / 15</div>
                        <div className="progress__progress">
                        {/*   procentToken   */}
                            <div style={{width : `${0}+%`}}></div>
                        </div>
                        <div className="progress__left"><b>left:</b> [left.Crop(4)] SWD</div>
                        <button className="button purple" data-toggle="level"> details <img
                        src="/static/img/svg/arrow.svg"
                        alt=""/></button>
                    </div>

                    <div className="total_staked d-none">
                        <h2>total staked now:</h2>
                        <h3>[parseFloat(882806+ total_staked.srx).Crop(2)] <span>SRX</span></h3>
                        <h3>[parseFloat(657076 + total_staked.trx - 107000000).Crop(2)] <span>TRX</span></h3>
                        <h3>[parseFloat(70635 +total_staked.tth).Crop(2)] <span>TTH</span></h3>
                    </div>
                </div>
                <div className="mining">
                    <div className="container">
                        <h2>SWORD token mining </h2>
                        <div className="mining-block">
                            <div className="mining__list">
                                <div className="mining__item mining__item--blue">
                                    <div className="mining__item-ava">
                                        <img src="/static/img/svg/srx.svg" alt=""/>
                                    </div>
                                    <div className="mining__item-info">
                                    {/* data-toggle="stake" @click="select_token = 'srx'" v-if="active" */}
                                        <button className="button blue-white" >
                                    stake srx <img src="/static/img/svg/arrow.svg" alt=""/>
                                </button>
                                        <div>
                                            <h2><b>your stake:</b></h2>
                                            <h2>[user_stake.srx] SRX</h2>
                                        </div>
                                        {/* @click.prevent="unfreeze('srx')" */}
                                        <a href="" className="text-blue" >unstake</a>
                                    </div>
                                </div>
                                <div className="mining__item mining__item--green">
                                    <div className="mining__item-ava">
                                        <img src="/static/img/svg/tth.svg" alt=""/>
                                    </div>
                                    <div className="mining__item-info">
                                    {/* @click="select_token = 'tth'" v-if="active" */}
                                        <button className="button green" data-toggle="stake">stake tth
                                    <img src="/static/img/svg/arrow.svg"
                                         alt=""/>
                                </button>
                                        <div>
                                            <h2><b>your stake:</b></h2>
                                            <h2>[user_stake.tth] TTH</h2>
                                        </div>
                                        {/* @click.prevent="unfreeze('tth')" */}
                                        <a href="" className="text-green" >unstake</a>
                                    </div>
                                </div>
                                <div className="mining__item mining__item--red">
                                    <div className="mining__item-ava">
                                        <img src="/static/img/svg/trx.svg" alt=""/>
                                    </div>
                                    <div className="mining__item-info">
                                    {/* @click="select_token = 'trx'" v-if="active" */}
                                        <button className="button red" data-toggle="stake" >stake trx
                                    <img src="/static/img/svg/arrow.svg"
                                         alt=""/>
                                </button>
                                        <div>
                                            <h2><b>your stake:</b></h2>
                                            <h2>[user_stake.trx] TRX</h2>
                                        </div>
                                        {/* @click.prevent="unfreeze" */}
                                        <a href="" className="text-red" >unstake</a>
                                    </div>
                                </div>
                            </div>
                            <div className="panel__right">
                                <div className="panel__content">
                                    <h3>SWORD token balance </h3>
                                    <h2>[avaiable] <span>SWD</span></h2>
                                    <img src="/static/img/png/m.png" alt=""/>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Per hour</td>
                                                <td>
                                                    [per_hour.Crop(4)] SWD
                                                    <span className="text-blue"> ~ [per_hour_price.Crop(4)] USD</span></td>
                                            </tr>
                                            <tr>
                                                <td>Per day</td>
                                                <td>
                                                    [parseFloat(per_hour * 24).Crop(4)] SWD
                                                    <span className="text-blue">~ [parseFloat(per_hour_price * 24).Crop(4)] USD</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Per 10 days</td>
                                                <td>
                                                    [parseFloat(per_hour * 24 * 10).Crop(4)] SWD
                                                    <span className="text-blue">~ [parseFloat(per_hour_price * 24 *10).Crop(4)] USD</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* @click.prevent="getMyToken" */}
                                    <button className="button blue" >
                                withdraw tokens <img src="/static/img/svg/arrow.svg" alt=""/>
                            </button>
                                    <a href="#" data-toggle="withdraw" className="text-blue">Statistics</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h3 style={{color:"#1D1D3D",fontSsize:"30px",textAlign: "center", marginBottom:"40px"}}>income from your referrals</h3>
                    <div className="ref">
                    {/* className="ref__left" */}
                        <div >
                        {/* :value="ref_link" */}
                            <h4>your referral link</h4> <input type="text" id="ref"  readonly/>
                            {/* @click.prevent="copy" */}
                            <button className="button purple">copy link <img
                            src="/static/img/svg/arrow.svg" alt=""/>
                            </button>
                            <p>Using this referral link, you can invite new users and receive Sword tokens as rewards</p>
                            <p className="text-uppercase fz14 fw500">
                                THE REWARD IS 10 % OF THE SWORD token MINED BY YOUR REFERRALS</p>
                        </div>
                        <div className="ref__right">
                            <div className="ref__right-content">
                                <h4>available reward</h4>
                                <h3>[referral_money] <span>SWD</span></h3>
                                {/* @click.prevent="getReferralMoney" */}
                                <button className="button purple d-none" >withdraw to the wallet
                            <img src="/static/img/svg/arrow.svg" alt=""/>
                        </button>
                        {/* @click.prevent="getReferralMoney" */}
                                <button className="button blue m-none" >withdraw to the wallet
                            <img src="/static/img/svg/arrow.svg" alt=""/>
                        </button>
                            </div>
                            <div className="ref__right-footer">
                                <h4>total referrals: <b>[total_referral]</b></h4>
                                {/* data-toggle="referral" */}
                                <a href="#" >referral statistics</a>
                            </div>
                        </div>
                    </div>

                    <section className="coming m-none" style={{background:"transparent", marginBottom:"0", paddingTop:"0"}}>

                        <h3 style={{color:"#1D1D3D",fontSize:"30px", textAlign:"center", marginBottom:"40px"}}>SHARK TRON PLATFORM SERVICES</h3>
                        <ul>
                          
                            <li style={{cursor:"pointer"}} onclick={window.open('http://sharktron.com/')}>
                                <i><img style={{marginTop: "13px", opacity:"1",zIndex:"1"}}
                                src="/static/img/coming/1-1.png" alt=""/></i>
                                <b>shark tron</b>
                                <span>available</span>
                            </li>
                            <li style={{cursor:"pointer"}} onclick={window.open('http://diceshark.com/')}>
                                <i><img style={{marginTtop:"43px", opacity:"1",zIndex:"1"}}
                                src="/static/img/coming/1.png" alt=""/></i>
                                <b>shark dice</b>
                                <span>available</span>
                            </li>
                            <li onclick={window.open('http://sharkinvest.io/')} style={{cursor: "pointer"}}>
                                <i><img style={{marginTop:"-5px",zIndex:"1",opacity:"1",marginLeft:"-25px"}} src="/static/img/coming/si.svg" alt=""/></i>
                                <b>shark invest</b>
                                <span>available</span>
                            </li>
                            <li>
                                <i><img style={{marginTop: "43px"}} src="/static/img/coming/2.png" alt=""/></i>
                                <b>shark casino</b>
                                <span>coming soon</span>
                            </li>
                            <li>
                                <i><img style={{marginTop:"23px"}} src="/static/img/coming/3.png" alt=""/></i>
                                <b>shark Exchange</b>
                                <span>coming soon</span>
                            </li>
                            <li>
                                <i><img style={{marginTop:" 43px"}} src="/static/img/coming/4.png" alt=""/></i>
                                <b>shark Bet</b>
                                <span>coming soon</span>
                            </li>
                        </ul>

                    </section>

                </div>


            </div>


    </main>

    <footer>
            <div className="container">
                <a className="logo">
                <img src="/static/img/svg/logo.svg" alt=""/>
            </a>
                <ul>
                    <li><a href="https://justswap.org/?lang=en-US#/home?tokenAddress=TLWAwUn79CVehz91A4J9nbh6SPPvDdhba1&type=swap" target="_blank">trade swd</a></li>
                    <li><a target="_blank" href="/static/whitepaper.pdf">whitepaper</a></li>
                </ul>
                <div className="soc">
                    <li><a href="https://twitter.com/shark_tron" target="_blank" onclick="window.open('https://twitter.com/shark_tron')">
                    <img src="/static/img/svg/main/tw.svg" alt=""/>
                </a>
                    </li>
                    <li><a data-toggle="soc" href="#" target="_blank">
                    <img src="/static/img/svg/main/tl.svg" alt=""/>
                </a></li>
                    <li><a href="#" data-toggle="lang" className="lang">
                    <img src="/static/img/flags/en.png" alt=""/>
                </a></li>
                </div>
                <a href="" className="copyright">Copyright © All rights reserved</a>
            </div>
        </footer>

        <div className="modal" data-modal="withdraw">
            <div className="modal__container" style={{maxWidth: "500px"}}>
                <button className="close"   ><img src="/static/img/svg/main/close.svg" alt=""/></button>
                <div className="modal-content">
                    <div className="container">
                        <h2>TOKEN WITHDRAWAL STATISTICS</h2>
                        <table>
                            <thead> 
                                <tr>
                                    <td>token withdrawal amount</td>
                                    <td>date/time</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="w in withdraw">
                                    <td><b className="text-dark-blue">[parseFloat(w.amount/1000000).Crop(6)]</b> SWD</td>
                                    <td>[w.date]</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal login-signin" data-modal="login">
            <div class="modal__container" style={{maxWidth:"500px"}}>
                <button class="close"  onClick={CloseLogin} ><img src="/static/img/svg/main/close.svg" alt=""/></button>
                <div class="modal-content">
                    <div class="container modal-login">
                        <h2>AUTHORIZATION</h2>
                        <p>Please sign in to your TRON wallet. If you haven’t downloaded the Install TronLink browser extension or the TronWallet application for your smartphone by clicking on the button below if you didn't this yet.
                        </p>
                        <p><b>Make sure you are on the mainnet network. Do not use a test network.</b></p>
                        <div>
                            <a href="https://www.tronlink.org/" target="_blank" class="button green">tron link</a>
                            <a href="https://www.tronwallet.me/" target="_blank" class="button blue">tron wallet</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


     <div className="modal" data-modal="referral">
            <div className="modal__container" style={{maxWidth: "500px"}}>
                <button className="close"><img src="/static/img/svg/main/close.svg" alt=""/></button>
                <div className="modal-content">
                    <div className="container">
                        <h2>TOKEN WITHDRAWAL STATISTICS</h2>
                        <table>
                            <thead>
                                <tr>
                                    <td>token withdrawal amount</td>
                                    <td>date/time</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="w in referral">
                                    <td><b className="text-dark-blue">[parseFloat(w.amount/1000000).Crop(6)]</b> SWD</td>
                                    <td>[w.date]</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    
             <div className="modal language_modal" data-modal="lang">
            <div className="modal__container modal-lang">
                <button className="close" onClick={FlagCloseHandler} >
            <img src="/static/img/svg/main/close.svg" alt=""/></button>
                <div className="container">
                    <ul>

                        <li><a href="/"><img src="/static/img/flags/en.png"
                                                                             alt=""/></a><span>English</span></li>

                        <li><a href="/zh-hans"><img src="/static/img/flags/zh-hans.png"
                                                                             alt=""/></a><span>中文</span></li>

                        <li><a href="/ru"><img src="/static/img/flags/ru.png"
                                                                             alt=""/></a><span>Русский</span></li>

                        <li><a href="/fa"><img src="/static/img/flags/fa.png"
                                                                             alt=""/></a><span>farsi</span></li>

                        <li><a href="/es"><img src="/static/img/flags/es.png"
                                                                             alt=""/></a><span>espanol</span></li>

                        <li><a href="/vi"><img src="/static/img/flags/vi.png"
                                                                             alt=""/></a><span>tiếng Việt</span></li>

                    </ul>
                </div>
            </div>
        </div>

        <div className="modal" data-modal="soc">
            <div className="modal__container modal-soc">
                <button className="close">
            <img src="/static/img/svg/main/close.svg" alt=""/></button>
                <div className="container">
                    <h2>contact us</h2>
                    <ul>
                        <li onclick="window.open('https://telegram.me/Shark_Tron')">
                            <i><img src="/static/img/flags/en.png" alt=""/></i>
                            <div>
                                <h3>english</h3>
                                <h5>telegram group</h5>
                                <h4>@Shark_Tron</h4>
                            </div>
                        </li>
                        <li onclick="window.open('https://t.me/Shark_Persian')">
                            <i><img src="/static/img/flags/fa.png" alt=""/></i>
                            <div>
                                <h3>iranian</h3>
                                <h5>telegram group</h5>
                                <h4>@Shark_Persian</h4>
                            </div>
                        </li>
                        <li onclick="window.open('https://t.me/Shark_chinese')">
                            <i><img src="/static/img/flags/zh-hans.png" alt=""/></i>
                            <div>
                                <h3>chinese</h3>
                                <h5>telegram group</h5>
                                <h4>@Shark_chinese</h4>
                            </div>
                        </li>
                        <li onclick="window.open('https://t.me/Shark_Spanish')">
                            <i><img src="/static/img/flags/es.png" alt=""/></i>
                            <div>
                                <h3>spanish</h3>
                                <h5>telegram group</h5>
                                <h4>@Shark_Spanish</h4>
                            </div>
                        </li>
                        <li onclick="window.open('https://t.me/Shark_Tron_Philippines')">
                            <i><img src="/static/img/flags/ph.png" alt=""/></i>
                            <div>
                                <h3>Philippines</h3>
                                <h5>telegram group</h5>
                                <h4>@Shark_Tron_Philippines</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>



        <div className="modal" data-modal="menu">
            <div className="modal__container modal-menu">
                <button className="close"><img src="/static/img/svg/main/close.svg" alt=""/></button>
                <div className="container">
                    <div className="wallet_info">
                        <h6>your wallet</h6>
                        <h5 v-if="user">[user_login]</h5>
                        <button className="button green" v-if="!user" data-toggle="login">login</button>
                    </div>
                    <menu>
                        <li><a href="https://justswap.org/?lang=en-US#/home?tokenAddress=TLWAwUn79CVehz91A4J9nbh6SPPvDdhba1&type=swap" target="_blank">trade swd</a></li>
                        <li><a target="_blank" href="/static/whitepaper.pdf">whitepaper</a></li>
                        <li><a target="_blank" href="https://diceshark.com/">diceshark</a></li>
                        <li><a target="_blank" href="https://sharktron.com/">sharktron</a></li>

                    </menu>
                    <ul className="soc">
                        <li onclick="window.open('https://twitter.com/shark_tron')"><a href="https://twitter.com/shark_tron" target="_blank">
                    <img src="/static/img/svg/main/tw.svg" alt=""/>
                </a>
                        </li>
                        <li>
                            <a href="#" data-toggle="soc" target="_blank">
                        <img src="/static/img/svg/main/tl.svg" alt=""/>
                    </a>
                        </li>
                        <li>
                            <a href="#" data-toggle="lang" className="lang">
                        <img src="/static/img/flags/en.png" alt=""/>
                    </a>
                        </li>
                    </ul>
                    <a href="" className="copyright">Copyright © All rights reserved</a>
                </div>
            </div>
        </div>


        <div className="modal" data-modal="statistics">
            <div className="modal__container" style={{maxWidth:"750px"}}>
                <button className="close"><img src="/static/img/svg/main/close.svg" alt=""/></button>
                <div className="modal-content">
                    <div className="container">
                        <h2>Financial Statistics</h2>
                        <table>
                            <thead>
                                <tr>
                                    <td>STAKE AMOUNT</td>
                                    <td className="m-none">Performed action</td>
                                    <td>date/time</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="w in statistics">
                                    <td>
                                        <b>[parseFloat(w.amount/1000000).Crop(6)]</b> trx
                                        {/* <span className="d-none" :class="{'text-green' : w.type ==='freeze' , 'text-blue' : w.type !== 'freeze'}">[w.type =='freeze' ? 'Posting of a stake' : 'Return of a deposit']</span> */}
                                    </td>
                                    {/* <td className="m-none" :class="{'text-green' : w.type ==='freeze' , 'text-blue' : w.type !== 'freeze'}">
                                        [w.type =='freeze' ? 'Posting of a stake' : 'Return of a deposit']
                                    </td> */}
                                    <td>[w.date]</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
     


        <div className="modal" data-modal="level">
            <div className="modal__container modal-stat" style={{maxWidth:"857px"}}>
                <button className="close"><img src="/static/img/svg/main/close.svg" alt=""/></button>
                <div className="modal-content">
                    <div className="container">
                        <h3 style={{marginTop: "40px"}}>CURRENT SWORD TOKEN MINING RATES</h3>

                        <div className="stat-progress">
                            <div className="stat-progress__header">
                                <h4>level: [currentLvl] <span>/ 15</span></h4>
                                <h5>tokens left at the current level</h5>
                                <h6>[parseFloat(level.amount - period_mined).Crop(2)] SWD / <span>[level.amount] SWD</span></h6>
                            </div>
                            <div className="stat-progress__footer">
                                <div>
                                    {/* <div :style="{'width' : procentToken+'%'}"></div> */}
                                </div>
                                <h4>sword token value: <b>~ [price_token_trx] TRX</b></h4>
                            </div>
                        </div>

                        <p>SWORD tokens mining is carried out by staking TRX, SRX and TTH tokens. Users can stake and unstake their tokens at any time. The SWD token offer is limited by 50,000,000 tokens. The mining process is divided into 15 levels. Each
                            level is limited to a certain number of tokens. The transition to each level is carried out automatically without the need for coins unstaking.</p>
                        <h3>ACCRUAL OF SWORD TOKENS</h3>
                        <p>SWD tokens are credited in real time. The number of credited tokens depends on the frozen amount, type of token and mining level. Please note that the profitability from SWD mining is fixed in TRX. In SRX or TTH tokens, it can
                            change depending on their exchange rate in relation to TRX.</p>
                        <h3>Mining level table and Sword token accrual:</h3>

                        <table className="d-none">
                            <thead>
                                <tr>
                                    <td>level</td>
                                    <td>EARNINGS IN 24 HOURS</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>[k+1]</b>/ [l.amount] SWD</td>
                                    <td>
                                        <span>1 srx = <b>[parseFloat(l.srx).toFixed(6).Crop(6)] SWD</b></span>
                                        <span>1 tth = <b>[parseFloat(l.tth).toFixed(6).Crop(6)] SWD</b></span>
                                        <span>1 trx = <b>[parseFloat(l.trx).toFixed(6).Crop(6)]  SWD</b></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="m-none stat-table">
                            <thead>
                                <tr>
                                    <td>level</td>
                                    <td colspan="3">EARNINGS IN 24 HOURS</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td><b>[k+1]</b>/ [l.amount] SWD</td>
                                    <td>1 trx = <b>[parseFloat(l.trx).toFixed(6).Crop(6)] SWD</b></td>
                                    <td>1 srx ~ <b>[parseFloat(l.srx).toFixed(6).Crop(6)] SWD</b></td>
                                    <td>1 tth ~ <b>[parseFloat(l.tth).toFixed(6).Crop(6)] SWD</b></td>
                                </tr>
                            </tbody>
                        </table>
                        <h3 style={{marginTop:"30px"}}>HOW TO USE SWORD TOKENS</h3>
                        <p>You can withdraw the received SWD tokens to your wallet at any time. The exchange of SWD tokens for TRX, SRX or TTH will be available on the JustSwap platform as well as on the SharkExchange. The price of mined tokens can change
                            over time. It depends on factors such as demand as well as the total amount of mined SWD tokens.</p>
                    </div>
                </div>
            </div>
        </div>




        <div class="modal stk" data-modal="stake">
          {/* in... modal__container  */}
        {/* :class="'modal-stake--'+select_token" */}
            <div class="modal__container modal-stake"  style={{maxWidth:"558px"}}>
                <button class="close">
            <img src="/static/img/svg/main/close.svg" alt=""/>
        </button>
                <div class="modal-content">
                    <div class="container">
                        <div class="modal-stake__header">
                            {/* <img :src="'/static/img/svg/'+select_token+'.svg'" alt=""/> */}
                            <div class="modal-stake-balance">
                                <h3>Your wallet balance</h3>
                                <h2>[active_balance] <span>[select_token]</span></h2>
                            </div>
                        </div>
                        <div class="modal-stake__content">
                            <div class="min">
                                <label for="">Enter the stake amount </label>
                                {/* <span :class="'text-'+color[select_token]">min: <b>[get_min] [select_token]</b></span> */}
                            </div>
                            <div class="input">
                                <input type="number" step="1" v-model="amount"/>
                                   {/* <span :class="'text-'+color[select_token]">[select_token]</span> */}
                                {/* <button :class="'text-'+color[select_token]" @click.prevent="get_max">max</button> */}
                            </div>
                            <table>
                                <caption>profitability</caption>
                                <tbody>
                                    <tr>
                                        <td>Per hour</td>
                                        <td>
                                            [ph.Crop(4)] SWD
                                            {/* <span :class="'text-'+color[select_token]">~ [parseFloat(ph * price_token).Crop(4)] USD</span> */}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Per day</td>
                                        <td>
                                            [parseFloat(ph *24).Crop(4)] SWD
                                            {/* <span :class="'text-'+color[select_token]">~ [parseFloat(ph * price_token * 24).Crop(4)] USD</span> */}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Per 10 days</td>
                                        <td>
                                            [parseFloat(ph * 24 * 10).Crop(4)] SWD
                                            {/* <span :class="'text-'+color[select_token]">~ [parseFloat(ph * price_token * 24 * 10).Crop(4)] USD</span> */}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <button class="button " :class="color[select_token]" v-if="select_token === 'trx'" @click.prevent="stake_action"> */}
                        {/* stake [select_token] */}
                        <img src="/static/img/svg/arrow.svg" alt=""/>
                    {/* </button> */}
                            {/* <button class="button " :class="color[select_token]" v-else-if="select_token !== 'trx' && allowance[select_token] >0 " @click.prevent="stake_action"> */}
                        {/* stake [select_token] */}
                        <img src="/static/img/svg/arrow.svg" alt=""/>
                    {/* </button> */}
                            {/* <button class="button " :class="color[select_token]" @click="approve_send" v-else> */}
                        approve [select_token]
                        <img src="/static/img/svg/arrow.svg" alt=""/>
                    {/* </button> */}
                        </div>
                        <div class="modal-stake__footer" v-if="hh.length > 0">
                            <h2>Financial statistics</h2>
                            <table>
                                <tr v-for="s in hh ">
                                    <td>[parseFloat(s.amount/1000000).Crop(4)] [select_token]</td>
                                    <td>[s.types]</td>
                                    <td>[s.date]</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>








    </div>
   </>
  );
}

export default App;
