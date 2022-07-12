import React from 'react';
const Footer = () => {
    return (
        <React.Fragment>
            <div className='explore'>
                <div className='footer-left mt-20'>
                    <div>
                        <img src='assets/image/Your Logo.png' />
                    </div>
                    <div>
                        <p>©  2021  Company Name <br />
                            All rights reserved</p>
                    </div>
                </div>
                <div className='footer-right'>
                    <ul className='landing-ul'>
                        <li className='landing-li-footer ' style={{ 'display': 'block', 'color': 'black' }}>
                            <a href="/" className='landing-li-footer-a active-black'>Call</a>
                            <a href="/" className='landing-li-footer-a'>Cities</a>
                            <a href="#AboutUs" className='landing-li-footer-a'>About Us</a>
                            <a href="#Explore" className='landing-li-footer-a'>Explore</a>
                        </li>

                    </ul>

                </div>
            </div>
        </React.Fragment>
    )
}
export default Footer;