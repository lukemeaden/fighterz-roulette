import React, { Component } from 'react';
import cx from 'classnames';

class FighterCard extends Component {

    yesOrNo = (option) => {
        return option ? 'Yes' : 'No';
    }

    render() {
        const { col, fighter, hasPosition, textAlign } = this.props;

        const cardClasses = cx({
            [`col`]: col,
            [`col-xs-${col && col.xs}`]: col && col.xs,
            [`col-sm-${col && col.sm}`]: col && col.sm,
            [`col-md-${col && col.md}`]: col && col.md,
            [`col-lg-${col && col.lg}`]: col && col.lg,
            [`fighter-card--${fighter.id}`]: true,
            [`fighter-card`]: true,
            [`text-align-${textAlign}`]: textAlign
        });

console.log(hasPosition);
        return (
            <div className={cardClasses}>
                { hasPosition && `<h4>${hasPosition}</h4>` }
                <h3 className="fighter-card__name">{fighter.name}</h3>
                <img src={require(`../../assets/images/fighters/${fighter.id}.png`)} className="fighter-card__image" />
                <table className="fighter-card__table table table-striped">
                    <tbody>
                        <tr>
                            <th>Tier:</th>
                            <td>{ fighter.tier }</td>
                        </tr>
                        <tr>
                            <th>Point:</th>
                            <td>{ this.yesOrNo(fighter.point) }</td>
                        </tr>
                        <tr>
                            <th>Assist:</th>
                            <td>{ this.yesOrNo(fighter.assist) }</td>
                        </tr>
                        <tr>
                            <th>Anchor:</th>
                            <td>{ this.yesOrNo(fighter.anchor) }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FighterCard;
