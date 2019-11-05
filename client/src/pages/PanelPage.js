import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AdminPanel from '../components/AdminPanel';


class PanelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Still deciding';
            case false:
                return (
                    <Redirect to="/login" />
                );
            default:
                return (
                    <AdminPanel />
                );
        }
    }

    render() {
        return (
            <>
                {this.renderContent()}
            </>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(PanelPage);