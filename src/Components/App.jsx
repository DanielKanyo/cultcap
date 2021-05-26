import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import logoEng from '../Static/Images/IPA_logo1.jpg';
import logoHun from '../Static/Images/IPA_logo2.jpg';
import logoSrb from '../Static/Images/IPA_logo3.jpg';
import euEng from '../Static/Images/euEng.png';
import euHun from '../Static/Images/euHun.png';
import euSrb from '../Static/Images/euSrb.png';
import szomszedEng from '../Static/Images/szomszedEng.png';
import szomszedHun from '../Static/Images/szomszedHun.png';
import szomszedSrb from '../Static/Images/szomszedSrb.png';

import nyito_file_hun from '../Static/Files/Nyito_rendezveny_CULTCAP_HU.doc';

import { TRANSLATIONS } from '../Static/Translations/translations';

import './App.css';

const useStyles = makeStyles(() => ({
    btn: {
        marginRight: 8,
        padding: 0,
        height: 50,
        width: 50,
        minWidth: 50,
        borderRadius: '50%'
    },
    card: {
        padding: '40px 70px',
        position: 'relative',
        overflow: 'unset',
        marginTop: 20
    },
    legalNoticeBtn: {
        position: 'absolute',
        top: -50,
        left: 0,
        backgroundColor: 'white'
    },
    linkBtn: {
        position: 'absolute',
        top: -50,
        right: 0,
        backgroundColor: 'white'
    },
    downloadBtn: {
        backgroundColor: 'white'
    }
}));

const App = () => {
    const classes = useStyles();
    const [language, setLanguage] = useState('hun');
    const [drawerState, setDrawerState] = useState(false);

    const getInterregLink = (lang) => {
        switch (lang) {
            case 'hun':
                return 'http://www.interreg-ipa-husrb.com/hu/nyitolap/';
            case 'eng':
                return 'http://www.interreg-ipa-husrb.com/';
            case 'srb':
                return 'http://www.interreg-ipa-husrb.com/srb/home/';

            default:
                return 'http://www.interreg-ipa-husrb.com/';
        }
    }

    const getIpaLogo = lang => {
        switch (lang) {
            case 'hun':
                return <img src={logoHun} alt='IPA_logo' />;
            case 'eng':
                return <img src={logoEng} alt='IPA_logo' />;
            case 'srb':
                return <img src={logoSrb} alt='IPA_logo' />;

            default:
                return <img src={logoHun} alt='IPA_logo' />;
        }
    }

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

    const constGoodNeighBoursLogo = lang => {
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

    const languageButtons = () => (
        <div>
            <Button
                className={classes.btn}
                variant='contained'
                color={language === 'hun' ? 'primary' : 'default'}
                onClick={() => setLanguage('hun')}
            >
                HU
            </Button>
            <Button
                className={classes.btn}
                variant='contained'
                color={language === 'srb' ? 'primary' : 'default'}
                onClick={() => setLanguage('srb')}
            >
                SRB
            </Button>
            <Button
                className={classes.btn}
                variant='contained'
                color={language === 'eng' ? 'primary' : 'default'}
                onClick={() => setLanguage('eng')}
            >
                EN
            </Button>
        </div>
    );

    return (
        <div className='App'>
            <div className='header'>
                <div className='header-IPA'>
                    <div>{getIpaLogo(language)}</div>
                    <div className='language-selector-mobile'>
                        <SwipeableDrawer anchor='top' open={drawerState} onClose={() => setDrawerState(false)}>
                            <div className='language-selector-in-drawer'>
                                {languageButtons()}
                            </div>
                        </SwipeableDrawer>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => setDrawerState(true)}>
                            <MenuIcon fontSize="inherit" />
                        </IconButton>
                    </div>
                    <div className='language-selector'>
                        {languageButtons()}
                    </div>
                </div>
                <div className='side-btn-container'>
                    <Button
                        className={classes.downloadBtn}
                        variant='contained'
                        target='_blank'
                        href={nyito_file_hun}
                        download
                    >
                        Nyitó rendezvény - Cultcap
                    </Button>
                </div>
                <div className='header-image'></div>
                <div className='header-logo'></div>
            </div>

            <div className='content'>
                <div>
                    <Card elevation={6} className={classes.card}>
                        <Button
                            variant='contained'
                            className={classes.linkBtn}
                            href={getInterregLink(language)}
                            target='_blank'
                        >
                            interreg-ipa-husrb.com
                        </Button>
                        {
                            TRANSLATIONS[language]['section1'] &&
                            <h2>{TRANSLATIONS[language]['section1']}</h2>
                        }
                        {
                            TRANSLATIONS[language]['section2'] &&
                            <h3>{TRANSLATIONS[language]['section2']}</h3>
                        }
                        {
                            TRANSLATIONS[language]['section3'] &&
                            <p className='text'>{TRANSLATIONS[language]['section3']}</p>
                        }
                        {
                            TRANSLATIONS[language]['section4'] &&
                            <p className='text'>{TRANSLATIONS[language]['section4']}</p>
                        }
                        {
                            TRANSLATIONS[language]['section5'] &&
                            <p className='text'>{TRANSLATIONS[language]['section5']}</p>
                        }
                        {
                            TRANSLATIONS[language]['section6'] &&
                            <p className='text'>{TRANSLATIONS[language]['section6']}</p>
                        }
                        {
                            TRANSLATIONS[language]['section7'] &&
                            <p className='text underline'>{TRANSLATIONS[language]['section7']}</p>
                        }
                        <div className='text'>
                            <ul>
                                {
                                    TRANSLATIONS[language]['section8'] && TRANSLATIONS[language]['section9'] &&
                                    <li>
                                        {
                                            <b>{TRANSLATIONS[language]['section8']} </b>
                                        }
                                        {
                                            TRANSLATIONS[language]['section9']
                                        }
                                    </li>
                                }
                                {
                                    TRANSLATIONS[language]['section10'] && TRANSLATIONS[language]['section11'] &&
                                    <li>
                                        {
                                            <b>{TRANSLATIONS[language]['section10']} </b>
                                        }
                                        {
                                            TRANSLATIONS[language]['section11']
                                        }
                                    </li>
                                }
                                {
                                    TRANSLATIONS[language]['section12'] && TRANSLATIONS[language]['section13'] &&
                                    <li>
                                        {
                                            <b>{TRANSLATIONS[language]['section12']} </b>
                                        }
                                        {
                                            TRANSLATIONS[language]['section13']
                                        }
                                    </li>
                                }
                                {
                                    TRANSLATIONS[language]['section14'] && TRANSLATIONS[language]['section15'] &&
                                    <li>
                                        {
                                            <b>{TRANSLATIONS[language]['section14']} </b>
                                        }
                                        {
                                            TRANSLATIONS[language]['section15']
                                        }
                                    </li>
                                }
                            </ul>
                        </div>
                    </Card>
                    <Card elevation={6} className={classes.card}>
                        <p>{TRANSLATIONS[language]['legalNoticeBtn']}</p>
                        <p className='logal-notice-txt'>{TRANSLATIONS[language]['legalNoticeTxt']}</p>
                    </Card>
                </div>
            </div>

            <div className='footer'>
                {getEuLogo(language)}
                {constGoodNeighBoursLogo(language)}
            </div>
        </div>
    );
}

export default App;
