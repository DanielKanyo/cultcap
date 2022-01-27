import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { useLightbox } from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

import Footer from './Footer/Footer';

import logoEng from '../Static/Images/IPA_logo1.jpg';
import logoHun from '../Static/Images/IPA_logo2.jpg';
import logoSrb from '../Static/Images/IPA_logo3.jpg';

import nyito_file_hun from '../Static/Files/Nyito_rendezveny_CULTCAP_HU.doc';
import nyito_file_srb from '../Static/Files/Nyito_rendezveny_CULTCAP_SRB.doc';

import { TRANSLATIONS } from '../Static/Translations/translations';
import { OPENING_EVENT_IMAGES, WORKSHOP_IMAGES, WORKSHOP_IMAGES2 } from '../Static/Constants/constants';

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
    },
    galleryContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    gridList: {
        width: 900,
    },
    img: {
        cursor: 'zoom-in'
    },
}));

const App = () => {
    const classes = useStyles();
    const [language, setLanguage] = useState('hun');
    const [drawerState, setDrawerState] = useState(false);
    const { openLightbox } = useLightbox();
    const [isMobileVisitor, setMobileVisitor] = useState(false);
    const COLS = 3;
    const cellHeight = {
        desktopVisitor: 230,
        mobileVisitor: 240
    };
    const options = {
        buttons: {
            showDownloadButton: false,
            showThumbnailsButton: false
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        if (window.innerWidth < 600) {
            setMobileVisitor(true);
        }
    }, []);

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

    const getDownloadButton = (lang) => {
        switch (lang) {
            case 'hun':
                return (
                    <Button
                        className={classes.downloadBtn}
                        variant='contained'
                        target='_blank'
                        href={nyito_file_hun}
                        download
                    >
                        {TRANSLATIONS[lang]['docDownloadText']}
                    </Button>
                );
            case 'eng':
                return null;
            case 'srb':
                return (
                    <Button
                        className={classes.downloadBtn}
                        variant='contained'
                        target='_blank'
                        href={nyito_file_srb}
                        download
                    >
                        {TRANSLATIONS[lang]['docDownloadText']}
                    </Button>
                );

            default:
                return null;
        }
    }

    const getLanguageButtons = () => (
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
                                {getLanguageButtons()}
                            </div>
                        </SwipeableDrawer>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => setDrawerState(true)}>
                            <MenuIcon fontSize="inherit" />
                        </IconButton>
                    </div>
                    <div className='language-selector'>
                        {getLanguageButtons()}
                    </div>
                </div>
                <div className='side-btn-container'>
                    {getDownloadButton(language)}
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
                        <p>{TRANSLATIONS[language]['links']['title']}</p>
                        <div className='links-container'>
                            {
                                TRANSLATIONS[language]['links']['links'].map((link) => {
                                    return (
                                        <p key={link}>
                                            <a href={link} target="_blank" rel="noreferrer">
                                                {link}
                                            </a>
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </Card>
                    <Card elevation={6} className={classes.card}>
                        <p>{TRANSLATIONS[language]['workshop2']}</p>
                        <div className='gallery'>
                            <div className={classes.galleryContainer}>
                                <GridList
                                    cellHeight={!isMobileVisitor ? cellHeight.desktopVisitor : cellHeight.mobileVisitor}
                                    className={classes.gridList}
                                    cols={COLS}
                                >
                                    {
                                        WORKSHOP_IMAGES2.map((image, i) => (
                                            <GridListTile
                                                key={i + OPENING_EVENT_IMAGES.length + WORKSHOP_IMAGES.length}
                                                cols={!isMobileVisitor ? image.cols : 3}
                                                onClick={() => openLightbox(i + OPENING_EVENT_IMAGES.length + WORKSHOP_IMAGES.length)}
                                            >
                                                <img loading="lazy" src={image.src} alt={image.title} className={classes.img} />
                                            </GridListTile>
                                        ))
                                    }
                                </GridList>
                            </div>
                        </div>
                    </Card>
                    <Card elevation={6} className={classes.card}>
                        <p>{TRANSLATIONS[language]['workshop']}</p>
                        <div className='gallery'>
                            <div className={classes.galleryContainer}>
                                <GridList
                                    cellHeight={!isMobileVisitor ? cellHeight.desktopVisitor : cellHeight.mobileVisitor}
                                    className={classes.gridList}
                                    cols={COLS}
                                >
                                    {
                                        WORKSHOP_IMAGES.map((image, i) => (
                                            <GridListTile
                                                key={i + OPENING_EVENT_IMAGES.length}
                                                cols={!isMobileVisitor ? image.cols : 3}
                                                onClick={() => openLightbox(i + OPENING_EVENT_IMAGES.length)}
                                            >
                                                <img loading="lazy" src={image.src} alt={image.title} className={classes.img} />
                                            </GridListTile>
                                        ))
                                    }
                                </GridList>
                            </div>
                        </div>
                    </Card>
                    <Card elevation={6} className={classes.card}>
                        <p>{TRANSLATIONS[language]['openingEvent']}</p>
                        <div className='gallery'>
                            <div className={classes.galleryContainer}>
                                <GridList
                                    cellHeight={!isMobileVisitor ? cellHeight.desktopVisitor : cellHeight.mobileVisitor}
                                    className={classes.gridList}
                                    cols={COLS}
                                >
                                    {
                                        OPENING_EVENT_IMAGES.map((image, i) => (
                                            <GridListTile
                                                key={i}
                                                cols={!isMobileVisitor ? image.cols : 3}
                                                onClick={() => openLightbox(i)}
                                            >
                                                <img loading="lazy" src={image.src} alt={image.title} className={classes.img} />
                                            </GridListTile>
                                        ))
                                    }
                                </GridList>
                            </div>

                            <SRLWrapper elements={[...OPENING_EVENT_IMAGES, ...WORKSHOP_IMAGES, ...WORKSHOP_IMAGES2]} options={options} />
                        </div>
                    </Card>
                    <Card elevation={6} className={classes.card}>
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

            <Footer language={language} />
        </div>
    );
}

export default App;
