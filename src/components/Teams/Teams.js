import React, { Component } from 'react';
import AllFighters from '../Fighters/AllFighters';

class Teams extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTeam: this.props.teams[0].id,
            teams: this.props.teams
        }
    }

    componentWillMount() {
        const { fighters, teams } = this.props;
        this.findTeamFighters(fighters, teams);
    }

    findTeamFighters = (fighters, teams) => {
        teams.map((team, i) => {
            const filteredFighters = team.fighters.map((fighter, i) => {
                return fighters.filter(item => item.id === fighter)[0];
            });
            const newTeams = this.state.teams;
            newTeams[i].fighters = filteredFighters;
            this.setState({
                newTeams
            })
        });
    }

    onChange = (e) => {
        this.setState({
            activeTeam: e.target.value
        });
    }

    render() {
        const { col } = this.props;
        return (
            <div className="teams">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 form-group">
                            <label><h2>Try picking a themed team:</h2></label>
                            <select id="team-select" className="form-control" onChange={this.onChange}>
                                { this.state.teams.map((team, i) => {
                                    return <option value={team.id} key={i}>{team.name}</option>
                                }) }
                            </select>
                        </div>
                    </div>
                    { this.state.teams.map((team, i) => {
                        if (this.state.activeTeam === team.id) return (
                            <div className="row">
                                <div className="col col-xs-12">
                                    <h2>{ team.name }</h2>
                                </div>
                            </div>,
                            <div className="row align-items-end">
                                <AllFighters fighters={team.fighters} col={col} />
                            </div>
                        )
                    }) }
                </div>
            </div>
        )
    }
}

export default Teams;
