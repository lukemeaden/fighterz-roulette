import React, { Component } from 'react';
import { fighters } from '../../data/fighters';
import { teams } from '../../data/teams';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AllFighters from '../Fighters/AllFighters';
import RandomFighter from '../Fighters/RandomFighter';
import RandomTeam from '../Teams/RandomTeam';
import Teams from '../Teams/Teams';

class AppWrapper extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header />
                <div className="container">
                    <div className="row">
                        <RandomFighter fighters={fighters} col={{xs: '4', sm: '4'}} textAlign="center" />
                        <RandomFighter fighters={fighters} col={{xs: '4', sm: '4'}} textAlign="center" />
                        <RandomFighter fighters={fighters} col={{xs: '4', sm: '4'}} textAlign="center" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <RandomTeam fighters={fighters} col={{xs: '4', sm: '4'}} textAlign="center" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <Teams teams={teams} fighters={fighters} col={{xs: '4', sm: '4'}} textAlign="center" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <AllFighters fighters={fighters} col={{xs: '4', sm: '2'}} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default AppWrapper;
