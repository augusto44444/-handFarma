import React from 'react'
import MenuItem from '../ReuseComponents/menuItem'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Home' icon='home' />
        <MenuItem path='#/farmacia' label='farmaciaPage' icon='plus' />
        <MenuItem path='#/cadfarmacia' label='Cadastrar Farmacia' icon='plus' />
    </ul>
)
