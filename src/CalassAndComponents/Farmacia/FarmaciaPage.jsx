import React, { Component } from 'react'
import Box from '../../common/ReuseComponents/Box'
import Title from '../../common/ReuseComponents/Title'
import boxHeader from '../../common/ReuseComponents/boxHeader'

class FarmaciaPage extends Component {

    render() {
        return (
            <Box>
                <boxHeader>
                    <Title text='Farmacia Page' />
                </boxHeader>
                <div className="box-body">
                    <h1>po</h1>
                </div>
            </Box>
        )
    }
}

export default FarmaciaPage