
import React, { useEffect } from 'react';
import "../global.css";
import { Button, IconButton, Menu, MenuItem, Grid } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';


function MyApp({ Component, pageProps }) {
    const theme = useTheme();
    const uptoMD = useMediaQuery(theme.breakpoints.down('md'));
    const uptoSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    var [currentPath, setCurrentPath] = useState('');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        if (window !== undefined) {
            setCurrentPath(window.location.pathname);
        }
    })

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <div>
        <div className='header_div'>
            <Link href="/">
                <img
                    src='/assets/logo.png'
                    alt="Picture of the author"
                    width={uptoSM ? '45%' : '250px'}
                    className='header_logo'
                />
            </Link>
            <div className='header_page_options'>
                <Link href="/"><Button variant="text" className={`header_btn ${currentPath === '/' ? 'active_link' : ''}`}>HOME</Button></Link>
                <Link href="/about_us"><Button variant="text" className={`header_btn ${currentPath === '/about_us' ? 'active_link' : ''}`}>WHO WE ARE</Button></Link>
                <Link href="/our_services"><Button variant="text" className={`header_btn ${currentPath === '/our_services' ? 'active_link' : ''}`}>SERVICES</Button></Link>
                <Link href="/solutions"><Button variant="text" className={`header_btn ${currentPath === '/solutions' ? 'active_link' : ''}`}>SOLUTIONS</Button></Link>
                <Link href="/contact_us"><Button variant="text" className={`header_btn ${currentPath === '/contact_us' ? 'active_link' : ''}`}>CONTACT US</Button></Link>
            </div>
            <div className='burger_option'>
                <IconButton id='burger-button'
                    aria-label="Burger Menu"
                    aria-controls={open ? 'burger-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="burger-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'burger-button',
                    }}
                >
                    <MenuItem onClick={handleClose}> <Link href="/"><Button variant="text" className={`header_btn ${currentPath === '/' ? 'active_link' : ''}`} >HOME</Button></Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href="/about_us"><Button variant="text" className={`header_btn ${currentPath === '/about_us' ? 'active_link' : ''}`}>WHO WE ARE</Button></Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href="/our_services"><Button variant="text" className={`header_btn ${currentPath === '/our_services' ? 'active_link' : ''}`}>SERVICES</Button></Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href="/solutions"><Button variant="text" className={`header_btn ${currentPath === '/solutions' ? 'active_link' : ''}`}>SOLUTIONS</Button></Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href="/contact_us"><Button variant="text" className={`header_btn ${currentPath === '/contact_us' ? 'active_link' : ''}`}>CONTACT US</Button></Link></MenuItem>
                </Menu>
            </div>
        </div>
        <div className='component_div'>
            <Component {...pageProps} />
        </div>
        <footer className='footer_container'>
            <Grid container className='footer'>
                <Grid item xs={12} sm={6} md={4}>
                    <img
                        src='/assets/logo.png'
                        alt="Picture of the author"
                        width={uptoSM ? '45%' : '250px'}
                        className='footer_logo'
                    />
                </Grid>
                <Grid item xs={12} sm={3} md={4} className='grid_item'>
                    <span className='footer_title'>
                        Office:
                    </span>
                    <br />
                    <span className='footer_text'>
                        Essencia Heights, <br /> Near Balewadi Stadium, <br /> Pune - 411045
                    </span>
                </Grid>
                <Grid item xs={12} sm={3} md={4} className='grid_item'>
                    <span className='footer_title'>
                        Get In Touch:
                    </span>
                    <br />
                    <span className='footer_text'>
                        <EmailIcon className='footer_icon' fontSize='12' /> sales@hoistinfotech.com
                    </span>
                </Grid>
                <div className='developed_by_div'>
                    <div className='developed_by_content'>
                        <span className='footer_subtitle'>Developed By:</span>
                        <img
                            src='/assets/HoistOnlyLogo.png'
                            alt="Picture of the author"
                            width={uptoSM ? '5%' : '25px'}
                            className='footer_logo'
                        />
                        <span>Hoist Infotech</span>
                    </div>
                </div>
            </Grid>
            <div className='copyright_div'>
                <span>
                    Copyrights © 2022 All Rights Reserved by Hoist Infotech
                </span>
            </div>
        </footer>
    </div>
}

export default MyApp