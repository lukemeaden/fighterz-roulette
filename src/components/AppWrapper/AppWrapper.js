import React, { Component } from 'react';
import { fighters } from '../../data/fighters';
import { teams } from '../../data/teams';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ListAllFighters from '../Fighters/ListAllFighters';
import RandomFighter from '../Fighters/RandomFighter';
import RandomTeam from '../Teams/RandomTeam';
import Teams from '../Teams/Teams';

class AppWrapper extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header />
                <RandomTeam fighters={fighters} col={{xs: '4', sm: '4'}} textAlign="center" />
                <div className="container">
                    <div className="row">
                        <Teams teams={teams} fighters={fighters} col={{xs: '4', sm: '3'}} textAlign="center" />
                    </div>
                </div>
                <ListAllFighters fighters={fighters} col={{xs: '4', sm: '3'}} />
                <Footer />
            </div>
        );
    }
}

export default AppWrapper;
