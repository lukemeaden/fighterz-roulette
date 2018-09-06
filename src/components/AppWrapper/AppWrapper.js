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
        const filterLiveFighters = fighters.filter((fighter, i) => fighter.live);

        return (
            <div className="app-wrapper">
                <Header />
                <RandomTeam fighters={filterLiveFighters} col={{xs: '4', sm: '4'}} textAlign="center" />
                <Teams teams={teams} fighters={filterLiveFighters} col={{xs: '4', sm: '4'}} textAlign="center" />
                <ListAllFighters fighters={filterLiveFighters} col={{xs: '4', sm: '3'}} />
                <Footer />
            </div>
        );
    }
}

export default AppWrapper;
