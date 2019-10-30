import React, { Component } from 'react'
import Box from '../../common/ReuseComponents/Box'
import Title from '../../common/ReuseComponents/Title'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FetchAllProdutos, Search } from '../Produto/produtosAction'
import { FaSearch, FaTimes } from 'react-icons/fa'

class VinculoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }


    componentDidMount() {
        this.props.FetchAllProdutos(this.props.token)
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
                            <div className='col-sm-12 col-md-8'>
                                <input type='text' id='search' className='form-control' placeholder='Procurar...' />
                            </div>
                            <a onClick={() => {
                                this.props.Search(document.getElementById('search').value)
                            }}
                                className='col-sm-12 col-md-2 btn btn-primary'>Procurar <FaSearch /></a>
                            <a onClick={() => {
                                this.props.FetchAllProdutos(this.props.token)
                                document.getElementById('search').value = ''
                            }} className='col-sm-12 col-md-2 btn btn-primary'>Limpar <FaTimes /></a>
                        </div>
                        <table className='table table-hover'>
                            <tr>
                                <th>Nome</th>
                                <th>Marca</th>
                                <th>Código de barra</th>
                                <th>Classificação</th>
                                <th>Ação</th>
                            </tr>
                            <tbody>
                                {
                                    produtos.map(pro => {
                                        return (
                                            <tr key={pro.pro_in_codigo}>
                                                <th>{pro.pro_st_nome}</th>
                                                <th>{pro.pro_st_marca}</th>
                                                <th>{pro.pro_st_cod_barra}</th>
                                                <th>{pro.pro_ch_classificacao}</th>
                                                <th>
                                                    oi
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
    token: state.user.token,
    produtos: state.produtos.produtos
});

const mapDispatchToProps = dispatch => bindActionCreators({ FetchAllProdutos, Search }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VinculoPage)