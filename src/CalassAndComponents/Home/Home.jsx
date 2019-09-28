import React, { Component } from 'react'
import Box from '../../common/ReuseComponents/Box'
import BoxHeader from '../../common/ReuseComponents/boxHeader'
import Title from '../../common/ReuseComponents/Title'


class HomePage extends Component {

    render() {
        return (
            <Box>
                <BoxHeader>
                    <Title text='HomePage' color='#212121'/>
                </BoxHeader>
                <div className='box-body'>
                    <h1>oi</h1>
                </div>
            </Box>
        )
    }
}

export default HomePage