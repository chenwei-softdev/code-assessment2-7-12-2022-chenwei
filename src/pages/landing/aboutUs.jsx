import React from 'react';
const AboutUs = () => {
    return (
        <React.Fragment>
            <div className='explore mt-10' id='AboutUs'>
                <h1>About Us</h1>
                <p>Allow us to tell you a short story...</p>
                <div className='aboutUs'>
                    <div className='aboutUs-1'>
                        <div className='mt-10'>
                            <div className='aboutUs-items'>
                                <img src='assets/image/pexels-oleg-zaicev-48348.png' alt='img' />
                                <div className='aboutUs1-1'>
                                    <h2>Chapter I</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <div className='aboutUs-items'>
                                <img src='assets/image/pexels-houzlook-com-3356416 2.png' alt='img' />
                                <div className='aboutUs1-1'>
                                    <h2>Chapter III</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='aboutUs-2'>
                        <div className='mt-10'>
                            <div className='aboutUs-items'>
                                <img src='assets/image/pexels-max-vakhtbovych-6492403 1.png' alt='img' />
                                <div className='aboutUs2-1'>
                                    <h2>Chapter II</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <div className='aboutUs-items'>
                                <img src='assets/image/pexels-oleg-zaicev-4834891 1.png' alt='img' />
                                <div className='aboutUs2-1'>
                                    <h2>Chapter IV</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AboutUs;