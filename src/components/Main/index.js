import './index.css';
import { useState } from 'react';
import axios from 'axios';
import React, { useEffect } from "react";
import {Icon} from "@iconify/react";
import graphics from '../../assets/img/graphics.jpg';
import {SiLinkedin} from "@react-icons/all-files/si/SiLinkedin";
import {GoMarkGithub} from "@react-icons/all-files/go/GoMarkGithub";

const Main = () => {

  const [coins, setCoins] = useState(null);
  const [brl, setBRL] = useState(null);
  const [choice, setChoice] = useState('dolar');

  const loadData = async () => {
    try {
        const response = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL');
        setCoins(response.data);
        //console.log(docs);
      
    } catch(err) {
        // TODO
        // adicionar tratamento da exceção
        console.error(err);
    }
  };

  useEffect(() => {
    loadData();
  }, [])

  const conversion = () => {
    if (coins) {
      let realFloat = parseFloat(brl);
      switch (choice) {

        case 'dolar':
          let dolarFloat = parseFloat(coins.USD.high);
          let realToDolar = (realFloat / dolarFloat);
          window.alert(`${realFloat} reais equilavem à ${realToDolar.toFixed(2)} dólares.`);
          break;
      
        case 'euro':
          let euroFloat = parseFloat(coins.EUR.high);
          let realtoEuro = (realFloat / euroFloat);
          window.alert(`${euroFloat} reais equivalem à ${realtoEuro.toFixed(2)} euros.`);

        case 'libra':
          let libraFloat = parseFloat(coins.GBP.high);
          let realtoLibra = (realFloat / libraFloat);
          window.alert(`${libraFloat} reais equivalem à ${realtoLibra.toFixed(2)} libras.`);

        default:
          break;
      }
    }
  }
  
  const envio = (event) => {
    event.preventDefault();
  } 

  return(
    <>
      {coins&&(
        <div className='area'>
          <div className='imgContainer'><img src={graphics} className='imgDesign'/></div> 
            <div className='titleInputArea'>
                <h1>Exchange</h1>
                <input type='number' placeholder='Ex.: R$1 (BRL):' className='field' onChange={(e) => setBRL(e.target.value)}></input>
                  <br></br><h3>Selecione a moeda 🪙</h3>
                  <form action="/action_page.php" onSubmit={envio}>
                    <select name="currency" id="currency" className='designCascade' onChange={(e) => setChoice(e.target.value)}>
                      <option value="dolar">Dólar (USD) {coins.USD.high}</option>
                      <option value="euro">Euro (EUR) {coins.EUR.high}</option>
                      <option value="libra">Libra (GBP) {coins.GBP.high}</option>
                    </select><br></br><br></br>
                    <input type="submit" value="Converter" className='submitDesign' onClick={() => conversion()}></input>
                  </form>
            </div>
            <div className='footerBackground'>
              <footer>
                <div className='containerText'>
                  <p>This page was built using ReactJS⚛️ and an API called</p>
                  <p className='apiLink'><a href='https://docs.awesomeapi.com.br/'>Awesome API</a></p>
                </div>
                <div className='containerSocial'>
                  <div className='containerIcons'>
                    <a href='https://www.linkedin.com/in/lucas-souza-franco/'>
                      <SiLinkedin className='icons'></SiLinkedin>
                    </a>
                    <a href='https://linktr.ee/lucassouzafranco'>
                      <Icon icon="simple-icons:linktree" className='icons'/>
                    </a>
                    <a href='https://github.com/lucassouzafranco'>
                      <GoMarkGithub className='icons'/>
                    </a>
                  </div>
                </div>
              </footer>
            </div>
        </div>
      )}
    </>
  )
}

export default Main;