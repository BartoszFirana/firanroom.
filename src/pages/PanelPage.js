import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AdminPanel from '../components/AdminPanel';

const permission = true;

const PanelPage = () => {
    return (
        <Route render={() => (
            permission ? (<AdminPanel />) : (<Redirect to="/login" />)
        )} />
    )
}

export default PanelPage;