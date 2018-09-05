import React, { Component } from 'react';
import AllFighters from './AllFighters';

class ListAllFighters extends Component {

    render() {
        const { col, fighters } = this.props;
        return (
            <div className="list-all-fighters">
                <div className="container">
                    <div className="row">
                        <AllFighters fighters={fighters} col={col} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ListAllFighters;
