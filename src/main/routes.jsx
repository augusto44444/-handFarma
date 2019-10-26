import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Home from '../CalassAndComponents/Home/Home'
import FarmaciaPage from '../CalassAndComponents/Farmacia/FarmaciaPage'
import FormFarmacia from '../CalassAndComponents/Farmacia/FormFarmacia'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/farmacia' component={FarmaciaPage} />
        <Route path='/cadfarmacia' component={FormFarmacia} />
        <Redirect from='*' to='/' />
    </Router>
)
