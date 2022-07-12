import React from 'react';
import { useState } from 'react';
const Header = () => {
    const [count, setCount] = useState(0);
    const [barcount, setBarCount] = useState(0);
    const [togglebuttonStyle, setToggleButton] = useState('display-none');
    const [barState, setBarState] = useState('none');
    const togglebutton = () => {
        if (count % 2 === 0) {
            setToggleButton('');
            setCount(count + 1);
        } else {
            setToggleButton('display-none')
            setCount(count + 1);
        }
    }
    const bars = () => {
        if (barcount % 2 === 1) {
            setBarState('none');
            setBarCount(barcount + 1);
            console.log('1')
        } else {

            setBarState('')
            setBarCount(barcount + 1)
        }
    }
    return (
        <React.Fragment>
            <div className='landing-header-bg-img' >
                <ul className='landing-ul'>
                    <li className='landing-li'>
                        <a href="/" className='landing-li-a'>
                            <img src='assets/image/Your Logo (1).png' alt='img' />
                        </a>
                    </li>
                    {
                        barState == '' ? <div className='float-right landing-li navbar' style={{ 'display': 'block' }}>

                            <a href="#Explore" className='landing-li-a'>Explore</a>
                            <a href="#AboutUs" className='landing-li-a'>About Us</a>
                            <li className='landing-li-a pr-52' >
                                <a href="#" className="dropbtn" onClick={togglebutton}>Dropdown <i className='fa fa-angle-down'></i></a>
                                <div className={togglebuttonStyle}>
                                    <div className="dropdown-content" >
                                        <a href="/"> 1</a>
                                        <a href="/"> 2</a>
                                        <a href="/"> 3</a>
                                    </div>
                                </div>
                            </li>
                            <a href="/" className='landing-li-a active'>Call</a>
                        </div> :
                            <div className='float-right landing-li navbar' style={{ 'display': 'none' }}>

                                <a href="#Explore" className='landing-li-a'>Explore</a>
                                <a href="#AboutUs" className='landing-li-a'>About Us</a>
                                <li className='landing-li-a pr-52' >
                                    <a href="#" className="dropbtn" onClick={togglebutton}>Dropdown <i className='fa fa-angle-down'></i></a>
                                    <div className={togglebuttonStyle}>
                                        <div className="dropdown-content" >
                                            <a href="/"> 1</a>
                                            <a href="/"> 2</a>
                                            <a href="/"> 3</a>
                                        </div>
                                    </div>
                                </li>
                                <a href="/" className='landing-li-a active'>Call</a>
                            </div>
                    }
                </ul>
                <h1 className='landing-header-title'>Rethink your <br />Living & renting</h1>
                <h1 className='landing-header-title1'>Make your stay painless with us</h1>
                <div >
                    <div>
                        <div className='landing-search' style={{'display' : 'flex'}}>
                            <div className='landing-search-item'>
                                <div className='landing-search-item-title'>
                                    <span >CITY</span>
                                </div>
                                <div className=''>
                                    <select className='select'>
                                        <option>Select your city</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                            </div>
                            <div className='landing-search-item'>
                                <div className='landing-search-item-title'>
                                    <span>CITY</span>
                                </div>
                                <div className=''>
                                    <select className='select'>
                                        <option>Select your city</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                            </div>
                            <div className='landing-search-item'>
                                <div className='landing-search-item-title'>
                                    <span>CITY</span>
                                </div>
                                <div className=''>
                                    <select className='select'>
                                        <option>Select your city</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                            </div>
                            <div className='landing-search-item landing-search-btn' style={{ 'cursor': 'pointer' }}>
                                <i className="fa fa-search"></i>&nbsp;
                                Search
                            </div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <h1 className='bars' onClick={bars} style={{ 'zIndex': '99' }}><i className='fa fa-bars'></i></h1>
                <h1 style={{ 'textAlign': 'center', 'color': 'white' }}><a href='#Explore' style={{ 'fontSize': '30px', 'color': 'white' }}><i className='fa fa-angle-down'></i></a></h1>

            </div>

            <img src='assets/image/Vector.png' alt='img' className='landing-vector' />


        </React.Fragment>
    )
}
export default Header;