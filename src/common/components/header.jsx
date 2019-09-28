import React from 'react'
import { IoMdHand } from 'react-icons/io'

import LoginComponent from '../../CalassAndComponents/Usuario/Login'

export default props => (
    <header className='main-header' >
        <a href='/#/' className='logo' style={{background: '#0097A7'}}>
            <span className='logo-mini' style={{background: '#0097A7'}}>
                <IoMdHand color='#00BCD4' />
                <b style={{ color: '#FFC107' }}>H</b>
                <span style={{ color: '#B2EBF2' }}>F</span>
            </span>
            <span className='logo-lg'  style={{background: '#0097A7'}}>
                <IoMdHand color='#00BCD4' />
                <b style={{ color: '#FFC107' }}> Hand</b> <span style={{ color: '#B2EBF2' }}>Farma</span>
            </span>
        </a>
        <nav className='navbar navbar-static-top hover' style={{background: '#00BCD4'}}>
            <a href className='sidebar-toggle'  data-toggle='offcanvas'></a>
            <LoginComponent />
        </nav>
    </header>
)