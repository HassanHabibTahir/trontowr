import React, { useState, useEffect } from 'react'
// import logo from './logo.svg';
// import './App.css';
// import LayoutShark from './components/layout';
import Sharkron from './components/sharktron';
import TronApi from './components/tronweb/troapi';
import {userData} from  './components/tronweb/utils';
import {WalletAddress} from './components/sharktron';
export default function App() {

    const [tronweb, setTronWeb] = useState('')
    useEffect(() => {
        const tronLoader = setInterval(() => {
            if (window.tronWeb && window.tronWeb.ready) {
                setTronWeb(window.tronWeb);
                clearInterval(tronLoader);
                
                // WalletAddress(tronweb.defaultAddress.base58,window.tronWeb)
            }
        }, 500);

    }, [])



    useEffect(()=>{
       
       if(tronweb){
        setInterval(()=>{
            
            // .base58
            userData(tronweb.defaultAddress,tronweb)
           
        },2000)
       }
     
    },[tronweb])



    return (
        <div>
            {/* <LayoutShark/> */}
            <Sharkron />
        </div>
    )
}




