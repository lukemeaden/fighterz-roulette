import React, { Component } from 'react';
import RandomFighter from '../Fighters/RandomFighter';

class RandomTeam extends Component {

    findFightersByPosition = (position) => {
        const { fighters } = this.props;
        return fighters.filter((item) => {
            if (item[position]) return item;
        })
    }

    render() {
        const { col, fighters, textAlign } = this.props;
        const pointFighters = this.findFightersByPosition('point');
        const assistFighters = this.findFightersByPosition('assist');
        const anchorFighters = this.findFightersByPosition('anchor');
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Your random team by position</h2>
                    </div>
                </div>
                <div className="row">
                    <RandomFighter key="point" fighters={pointFighters} col={col} textAlign={textAlign} />
                    <RandomFighter key="assist" fighters={assistFighters} col={col} textAlign={textAlign} />
                    <RandomFighter key="anchor" fighters={anchorFighters} col={col} textAlign={textAlign} />
                </div>
            </div>
        )
    }
}

export default RandomTeam;
