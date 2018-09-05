import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6">
                            <p>FighterZ Roulette</p>
                        </div>
                        <div className="col-xs-6">
                            <p className="text-align-right">Created by Luke Meaden</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
