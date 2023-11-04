import './Footer.scss'
import React from 'react'
import {Link} from 'react-router-dom'
import Location from '../../assets/svg/direction-gps-maps-4-svgrepo-com.svg'
import Twitter from '../../assets/svg/twitter-round-svgrepo-com.svg'
import Facebook from '../../assets/svg/facebook-svgrepo-com.svg'
import Instagram from '../../assets/svg/instagram-round-svgrepo-com.svg'
import Linkedin from '../../assets/svg/linkedin-round-svgrepo-com.svg'
import UamLogo from '../../assets/img/logo-removebg-preview.png'
import Contact from'../../assets/svg/contact-request-svgrepo-com.svg'


export const Footer = () => {
    const privacy = () => {
        console.log('Di click en privacidad');
        window.open('../Privacy','_self')
    }
    return (
        <div className='Footer'>
            <div className = 'Location'>
                Ubicacion y contacto:
                <img src={Location} alt="Location" className='Svg'/>
                <img src={Contact} alt="Contact" className='Svg'/>
            </div>
            <div className='SocialMedia'>
                Redes sociales:
                <img src={Instagram} alt='Instagram' className='Svg'/>
                <img src={Facebook} alt='Facebook' className='Facebook'/>
                <img src={Linkedin} alt='Linkedin' className='Svg'/>
                <img src={Twitter} alt='Twitter' className='Svg'/>
            </div>
            <div className='Privacy'>
                <div className='conf-button'>
                    <button className="privacy-button" onClick={privacy}>
                        Politica de privacidad y de datos
                    </button>
                </div>
                <img src = {UamLogo} alt="UamLogo" className='Logo'/>
            </div>    
        </div>
    )
}

