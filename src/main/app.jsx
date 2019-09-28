import '../common/template/dependencies'
import React from 'react'
import Header from '../common/components/header'
import SideBar from '../common/components/sidebar'
import Router from '../main/routes'

export default props => (

    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <div style={{ margin: 10 }}>
                <Router />
            </div>
        </div>

    </div>
)