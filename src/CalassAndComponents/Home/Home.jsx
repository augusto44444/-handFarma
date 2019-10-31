import React, { Component } from 'react'
import Box from '../../common/ReuseComponents/Box'
import BoxHeader from '../../common/ReuseComponents/boxHeader'
import Title from '../../common/ReuseComponents/Title'
import { FaSearch } from 'react-icons/fa'
import { searchUser, setProdutoFarmacia } from '../ProdutoFarmacia/produtoFarmaciaAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class HomePage extends Component {

    render() {
        const produtos = this.props.produtos || []
        return (
            <Box>
                <BoxHeader>
                    <Title text='HomePage' color='#212121' />
                </BoxHeader>
                <div className='box-body'>
                    <div style={{ marginBottom: 10 }} className='col-sm-12 col-md-5'>
                        <input className='form-control' id='search' placeholder='Procurar...' />
                    </div>
                    <div style={{ marginBottom: 10 }} className='col-sm-12 col-md-5'>
                        <input className='form-control' id='location' placeholder='Filtrar por cidade, bairro ou rua' />
                    </div>
                    <div style={{ marginBottom: 10 }} className='col-sm-12 col-md-2'>
                        <a onClick={() => this.props.searchUser(document.getElementById('location').value, document.getElementById('search').value)} className='form-control btn btn-primary'>
                            <span style={{ fontSize: 16 }}>Procurar </span>
                            <FaSearch style={{ marginLeft: 10, fontSize: 16 }} color='#FFC107' />
                        </a>
                    </div>
                    <div className='tableView'>
                        <table className='table table-hover'>
                            <tr>
                                <th>Nome</th>
                                <th>Marca</th>
                                <th>Valor</th>
                            </tr>
                            <tbody>
                                {
                                    produtos.map((pro, id) => {

                                        return (
                                            <tr onClick={() => {
                                                this.props.setProdutoFarmacia(pro)
                                            }} key={id}>
                                                <th>{pro.pro_st_nome}</th>
                                                <th>{pro.pro_st_marca}</th>
                                                <th>{pro.pf_st_valor}</th>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Box>
        )
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({ searchUser, setProdutoFarmacia }, dispatch);

const mapStateToProps = state => ({
    produtos: state.produtos.produtoFarmacias
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)