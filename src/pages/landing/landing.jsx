import React from 'react';
import AboutUs from './aboutUs';
import Explore from './explore';
import Footer from './footer';
import Header from './header';
const Landing = () => {
    return (
        <React.Fragment>
            <div>
                <Header />
                <Explore />
                <AboutUs />
                <Footer />
            </div>
        </React.Fragment>
    )
}
export default Landing;
