import React from 'react'

export default props => (
    <li className="treeview">
        <a href> 
            <i style={{color: '#FFC107'}} className = {`fa fa-${props.icon}`}></i> <span>{props.label}</span>
            <i style={{color: '#FFC107'}} className='fa fa-angle-down pull-right'></i>
        </a>
        <ul className="treeview-menu">
            {props.children}
        </ul>
    </li>
)