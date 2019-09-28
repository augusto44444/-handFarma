import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Home from '../CalassAndComponents/Home/Home'
import FarmaciaPage from '../CalassAndComponents/Farmacia/FarmaciaPage'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/farmacia' component={FarmaciaPage} />
        <Redirect from='*' to='/' />
    </Router>
)
