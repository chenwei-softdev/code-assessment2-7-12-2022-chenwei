import React from 'react';
const Explore = () => {
    return (
        <React.Fragment>
            <div className='explore' id='Explore'>
                <h1>Explore</h1>
                <p>From one-guest rooms to<br /> penthouses with pools and gardens</p>
                <div>
                    <div className='product' style={{ 'marginRight': '2%' }}>
                        <div className='product-image'>
                            <img src='assets/image/pexels-dmitry-zvolskiy-2082087 1.png' alt='img' />
                        </div>
                        <div className='product-title'>
                            <div>
                                <p>Room with one king-size bed</p>
                                <div className='explore-btn-sm'>35$</div>
                                <div className='explore-btn-sm'>28м²</div>
                            </div>
                            <div className='float-right'>
                                <div className='explore-btn-lm mt-5'>Book!</div>
                            </div>
                        </div>

                    </div>
                    <div className='product second-product' style={{ 'marginLeft': '2%' }}>
                        <div className='product-image'>
                            <img src='assets/image/pexels-naim-benjelloun-2029670 1.png' alt='img' />
                        </div>
                        <div className='product-title'>
                            <div>
                                <p>Room with one king-size bed</p>
                                <div className='explore-btn-sm'>2039$</div>
                                <div className='explore-btn-sm'>438м²</div>
                            </div>
                            <div className='float-right'>
                                <div className='explore-btn-lm mt-5'>Book!</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Explore;