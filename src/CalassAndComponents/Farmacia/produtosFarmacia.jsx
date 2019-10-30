import React, { Component } from 'react'
import Box from '../../common/ReuseComponents/Box'
import Title from '../../common/ReuseComponents/Title'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProdutosByFarmacia } from '../Produto/produtosAction'
import { FaSearch, FaTimes } from 'react-icons/fa'

class ProdutosFarmacia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            produto: null
        }
    }

    componentDidMount() {
        const farmaciaId = this.props.farmacia.far_in_codigo
        this.props.getProdutosByFarmacia(farmaciaId)
    }

    render() {
        const produtos = this.props.produtos || []

        return (
            <div style={{ padding: 10 }}>
                <Box>
                    <boxHeader>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Title text='Produtos Page' />
                        </div>
                    </boxHeader>
                    <div className="box-body">
                        <div>
                            <div style={{marginBottom: 10}} className='col-sm-12 col-md-8'>
                                <input type='text' id='search' className='form-control' placeholder='Procurar...' />
                            </div>
                            <div className='col-sm-12 col-md-2' style={{ marginBottom: 10 }}>
                                <a onClick={() => {
                                    this.props.Search(document.getElementById('search').value)
                                }}
                                    className='btn btn-primary form-control'>
                                    Procurar <FaSearch />
                                </a>
                            </div>
                            <div style={{ marginBottom: 10 }} className='col-sm-12 col-md-2' >
                                <a onClick={() => {
                                    this.props.FetchAllProdutos(this.props.token)
                                    document.getElementById('search').value = ''
                                }} className='btn btn-primary form-control'>
                                    Limpar <FaTimes />
                                </a>
                            </div>

                        </div>
                        {this.state.visible ?
                            <div>
                                <div className='col-sm-12 col-md-5'>
                                    <label style={{ marginBottom: 10, marginTop: 10 }} className='col-sm-12 col-md-2'>
                                        Valor:
                            </label>
                                    <div className="col-sm-12 col-md-10">
                                        <input style={{ marginBottom: 10, marginTop: 10 }} type="text" className='form-control' placeholder='R$ 00,00' id='valor' />
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-5'>
                                    <label style={{ marginBottom: 10, marginTop: 10 }} className='col-sm-12 col-md-2'>
                                        Valor:
                            </label>
                                    <div className="col-sm-12 col-md-10">
                                        <input style={{ marginBottom: 10, marginTop: 10 }} type="number" className='form-control' placeholder='999' id='qtd' />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-2">
                                    <a onClick={() => {
                                        const obj = {
                                            valor: document.getElementById('valor').value,
                                            qtd: document.getElementById('qtd').value,
                                            
                                        }
                                    }} style={{ marginBottom: 10, marginTop: 10 }} className='btn btn-primary'>Adicionar</a>
                                </div>
                            </div>
                            :
                            null
                        }

                        <div >
                            <table className='table table-hover'>
                                <tr>
                                    <th>Nome</th>
                                    <th>Marca</th>
                                    <th>Código de barra</th>
                                    <th>Classificação</th>
                                </tr>
                                <tbody>
                                    {
                                        produtos.map((pro, id) => {

                                            return (
                                                <tr onClick={() => this.setState({ visible: !this.state.visible, produto: pro })} key={pro.pro_in_codigo}>
                                                    <th>{pro.pro_st_nome}</th>
                                                    <th>{pro.pro_st_marca}</th>
                                                    <th>{pro.pro_st_cod_barra}</th>
                                                    <th>{pro.pro_ch_classificacao}</th>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Box>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    token: state.user.token,
    produtos: state.produtos.produtos,
    farmacia: state.user.userData
});

const mapDispatchToProps = dispatch => bindActionCreators({ getProdutosByFarmacia }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProdutosFarmacia)