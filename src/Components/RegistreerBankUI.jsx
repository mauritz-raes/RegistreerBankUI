import React from 'react';
import './RegistreerBankUI.css';
import Logo from './Images/Logo_AP.png';
import bankcontactLogo from './Images/bancontact.png';

const RegistreerBankUI = () => {
  return (
    <div className='RegistreerBankUI'>
        <header>
        <img className='logo' alt='1' src={Logo} />
        <img className='logoBankContact' src={bankcontactLogo} alt='2'/>
        </header>
        <div className='container'> 
        <h1 className='registreerBank'>Registreer bank</h1>
        <div className='RegistreerContainer'>
            
            <div className='RegistreerForm'>
                <div className='RegistreerForm1'>
                    <label className='RegistreerForm1Label'>Naam:</label>
                    <label className='RegistreerForm1Label'>Filiaal:</label>
                    <label className='RegistreerForm1Label'>Telefoonnummer:</label>
                    <label className='RegistreerForm1Label'>Aanspreekpunt:</label>
                    <label className='RegistreerForm1Label'>E-mail:</label>
                    <label className='RegistreerForm1Label'>Wachtwoord:</label>
                    <label className='RegistreerForm1Label'>Herhaal Wachtwoord:</label>
                </div>
              <div className='RegistreerForm2'>
                <input className='RegistreerForm2Input' type='text' placeholder=''/>
                <input className='RegistreerForm2Input' type='text' placeholder=''/>
                <input className='RegistreerForm2Input' type='text' placeholder=''/>
                <input className='RegistreerForm2Input' type='text' placeholder=''/>
                <input className='RegistreerForm2Input' type='text' placeholder=''/>
                <input className='RegistreerForm2Input' type='password' placeholder=''/>
                <input className='RegistreerForm2Input' type='password' placeholder=''/>
              </div>
            <div className='RegistreerButtons'>
              <button id='RegistreerButton'>Registreer</button>
              <button id='annuleerButton'>Annuleren</button>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RegistreerBankUI