import './index.css';
import React from "react";
import {Icon} from "@iconify/react";
import graphics from '../../assets/img/graphics.jpg';
import {SiLinkedin} from "@react-icons/all-files/si/SiLinkedin";
import {GoMarkGithub} from "@react-icons/all-files/go/GoMarkGithub";

const Main = () => {

  return(
    <>

      <div className='area'>
        <div className='imgContainer'><img src={graphics} className='imgDesign'/></div> 
          <div className='titleInputArea'>
              <h1>Exchange</h1>
              <input type='number' placeholder='Digite um valor em reais R$ (BRL):' className='field'></input>
                <br></br><h3>Selecione a moeda 🪙</h3>
                <form action="/action_page.php">
                  <select name="currency" id="currency" className='designCascade'>
                    <option value="dolar">Dólar (USD)</option>
                    <option value="euro">Euro (EUR)</option>
                    <option value="libra">Libra (GBP)</option>
                  </select><br></br><br></br>
                  <input type="submit" value="Converter" className='submitDesign'></input>
                </form>
          </div>
          <div className='footerBackground'>
            <footer>
              <p>This page was built using ReactJS⚛️ and an API called ... </p>
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