import React, { Component } from 'react'
import Box from '../../common/ReuseComponents/Box'
import Title from '../../common/ReuseComponents/Title'
import boxHeader from '../../common/ReuseComponents/boxHeader'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FetchFarmacias, DeleteFarmacia, setFarmacia } from './FarmaciaAction'

import { FaPlus, FaPen, FaArrowLeft, FaTrash } from 'react-icons/fa'

class FarmaciaPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editPass: false,
            render: true
        }
    }

    componentDidMount() {
        this.props.FetchFarmacias()
    }

    render() {
        const farmacias = this.props.farmacias || []
        return (
            <div style={{ padding: 10 }}>
                <Box>
                    <boxHeader>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Title text='Farmácia Page' />
                            <a href='#/cadfarmacia'
                                className='btn btn-primary' style={{ margin: 10 }}>
                                <span>Novo <FaPlus color='#FFC10C' /></span>
                            </a>
                        </div>
                    </boxHeader>
                    <div className="box-body">


                        <table className='table'>
                            <tr>
                                <th>Nome</th>
                                <th>Rua</th>
                                <th>Número</th>
                                <th>Bairro</th>
                                <th>Cidade</th>
                                <th>telefone</th>
                                <th>Celular</th>
                                <th>Ação</th>
                            </tr>
                            <tbody>
                                {
                                    farmacias.map(far => {
                                        return (
                                            <tr key={far.far_in_codigo}>
                                                <th>{far.far_st_nome}</th>
                                                <th>{far.far_st_rua}</th>
                                                <th>{far.far_in_numero}</th>
                                                <th>{far.far_st_bairro}</th>
                                                <th>{far.far_st_cidade + '-' + far.far_ch_estado}</th>
                                                <th>{far.far_st_telefone}</th>
                                                <th>{far.far_st_celular}</th>
                                                <th>
                                                    <a style={{ marginLeft: 10 }} href='#/editFarmacia' onClick={() => {
                                                        this.props.setFarmacia(far)
                                                    }} className='btn btn-primary'>
                                                        <FaPen color='#FFC10C' />
                                                    </a>
                                                    <a style={{ marginLeft: 10 }} className='btn btn-primary' onClick={() => this.props.DeleteFarmacia(far.far_in_codigo, far.usu_in_codigo)} >
                                                        <FaTrash color='#FFC10C' />
                                                    </a>
                                                </th>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </Box>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    farmacias: state.farmacia.farmacias
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ FetchFarmacias, DeleteFarmacia, setFarmacia }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FarmaciaPage)