import React, { Component } from 'react';
import FighterCard from './FighterCard';

class AllFighters extends Component {

    render() {
        const { col, fighters } = this.props;
        return (
            <ul className="all-fighters">
                { fighters.map((fighter, i) => {
                    if (!fighter.live) return null;
                    return (
                        <li key={i} className="all-fighters__item">
                            <FighterCard fighter={fighter} col={col} />
                        </li>
                    )
                }) }
            </ul>
        )
    }
}

export default AllFighters;
