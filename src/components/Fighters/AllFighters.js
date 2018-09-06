import React, { Component } from 'react';
import FighterCard from './FighterCard';

class AllFighters extends Component {

    render() {
        const { col, fighters } = this.props;
        return fighters.map((fighter, i) => {
            return <FighterCard key={i} fighter={fighter} col={col} />
        })
    }
}

export default AllFighters;
