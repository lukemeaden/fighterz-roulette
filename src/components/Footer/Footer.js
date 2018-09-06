import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-6">
                            <p>FighterZ Roulette</p>
                        </div>
                        <div className="col col-xs-6">
                            <p className="text-align-right">Created by <a href="https://github.com/lukemeaden">Luke Meaden</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
