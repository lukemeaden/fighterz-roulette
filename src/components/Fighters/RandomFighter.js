import React, { Component } from 'react';
import FighterCard from './FighterCard';

class RandomFighter extends Component {

    render() {
        const { col, fighters, textAlign } = this.props;
        const rng = Math.floor(Math.random() * fighters.length) + 0;
        return <FighterCard fighter={fighters[rng]} col={col} textAlign={textAlign} />
    }
}

export default RandomFighter;
