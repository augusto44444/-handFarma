import React from 'react'
import MenuItem from '../ReuseComponents/menuItem'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Home' icon='home' />
        <MenuItem path='#/farmacia' label='farmaciaPage' icon='plus' />
        <MenuItem path='#/produtoList' label='VincularProdutos' icon='plus' />
        <MenuItem path='#/produtoPage' label='Produto' icon='list' />
    </ul>
) 
