import './index.css';
import React, { useEffect } from "react";
import { useState } from 'react';
import {Icon} from "@iconify/react";
import graphics from '../../assets/img/graphics.jpg';
import {SiLinkedin} from "@react-icons/all-files/si/SiLinkedin";
import {GoMarkGithub} from "@react-icons/all-files/go/GoMarkGithub";

function Main () {

  const axios = require('axios');
  const [coins, setCoins] = useState();

  const loadData = async () => {
    try {
        const response = await axios.get('https://v6.exchangerate-api.com/v6/1a02e137f791b3f57dcdc75a/latest/BRL');

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

  return(
    <>

      <div className='area'>
        <div className='imgContainer'><img src={graphics} className='imgDesign'/></div> 
          <div className='titleInputArea'>
              <h1>Exchange</h1>
              <input type='number' placeholder='Ex.: R$1 (BRL):' className='field'></input>
                <br></br><h3>Selecione a moeda 🪙</h3>
                <form action="/action_page.php">
                  <select name="currency" id="currency" className='designCascade'>
                    <option value="dolar">Dólar (USD {coins.conversion_rates.USD})</option>
                    <option value="euro">Euro (EUR {coins.conversion_rates.EUR})</option>
                    <option value="libra">Libra (GBP {coins.conversion_rates.GBP})</option>
                  </select><br></br><br></br>
                  <input type="submit" value="Converter" className='submitDesign'></input>
                </form>
          </div>
          <div className='footerBackground'>
            <footer>
              <p>This page was built using ReactJS⚛️ and an API called Exchange Rate </p>
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
      
    </>
  )
}

export default Main;