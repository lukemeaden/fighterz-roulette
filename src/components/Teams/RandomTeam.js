import React, { Component } from 'react';
import RandomFighter from '../Fighters/RandomFighter';

class RandomTeam extends Component {

    findFightersByPosition = (position) => {
        const { fighters } = this.props;
        return fighters.filter((item) => {
            if (item[position]) return item;
        })
    }

    handleClick = () => {
        this.forceUpdate();
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
                        <div className="col col-xs-12">
                            <h2>Your random team by position</h2>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <RandomFighter key="point" col={col} fighters={pointFighters} textAlign={textAlign} hasPosition="Point" />
                        <RandomFighter key="assist" col={col} fighters={assistFighters} textAlign={textAlign} hasPosition="Assist" />
                        <RandomFighter key="anchor" col={col} fighters={anchorFighters} textAlign={textAlign} hasPosition="Anchor" />
                    </div>
                    <div className="row random-team__button-row">
                        <div className="col col-xs-12">
                            <button className="btn btn-primary btn-block" onClick={this.handleClick}>Roll again</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomTeam;
