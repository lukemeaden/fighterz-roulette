import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header" style={{backgroundImage: `url(${require('../../assets/images/banner.jpg')})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <h1> FighterZ Roulette</h1>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
