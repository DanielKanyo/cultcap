import React from 'react';

import euEng from '../../Static/Images/euEng.png';
import euHun from '../../Static/Images/euHun.png';
import euSrb from '../../Static/Images/euSrb.png';
import szomszedEng from '../../Static/Images/szomszedEng.png';
import szomszedHun from '../../Static/Images/szomszedHun.png';
import szomszedSrb from '../../Static/Images/szomszedSrb.png';

const Footer = (language) => {
    const getEuLogo = lang => {
        switch (lang) {
            case 'hun':
                return <img src={euHun} alt='eu' height='80px' />;
            case 'eng':
                return <img src={euEng} alt='eu' height='80px' />;
            case 'srb':
                return <img src={euSrb} alt='eu' height='80px' />;

            default:
                return <img src={euHun} alt='eu' height='80px' />;
        }
    }

    const getGoodNeighBoursLogo = lang => {
        switch (lang) {
            case 'hun':
                return <img src={szomszedHun} alt='eu' height='80px' />;
            case 'eng':
                return <img src={szomszedEng} alt='eu' height='80px' />;
            case 'srb':
                return <img src={szomszedSrb} alt='eu' height='80px' />;

            default:
                return <img src={szomszedHun} alt='eu' height='100px' />;
        }
    }

    return (
        <div className='footer'>
            {getEuLogo(language)}
            {getGoodNeighBoursLogo(language)}
        </div>
    )
}

export default Footer;
