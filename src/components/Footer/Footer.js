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
                            <p className="text-align-right"><small>
                                Created by <a href="https://github.com/lukemeaden">Luke Meaden</a><br />
                                You can find this project over on <a href="https://github.com/lukemeaden/fighterz-roulette">GitHub</a>
                            </small></p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
