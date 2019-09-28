import React from 'react'
export default props => (
    <li>
        <a href={props.path}>
            <i className={`fa fa-${props.icon}`} style={{color: '#FFC107'}}></i> <span style={{color: 'white'}}>{props.label}</span>
        </a>
    </li>
)
