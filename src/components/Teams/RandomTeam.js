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
            <div className="random-team">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>Your random team by position</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4">
                            <h4>Point</h4>
                            <RandomFighter key="point" fighters={pointFighters} textAlign={textAlign} />
                        </div>
                        <div className="col-xs-4">
                            <h4>Assist</h4>
                            <RandomFighter key="assist" fighters={assistFighters} textAlign={textAlign} />
                        </div>
                        <div className="col-xs-4">
                            <h4>Anchor</h4>
                            <RandomFighter key="anchor" fighters={anchorFighters} textAlign={textAlign} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomTeam;
