import React, { Component } from 'react'
import Box from '../../common/ReuseComponents/Box'
import Title from '../../common/ReuseComponents/Title'
import boxHeader from '../../common/ReuseComponents/boxHeader'
import ProdutoForm from './FormProduto'
import FormProduto from './FormProduto'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { CadProduto, FetchAllProdutos, DeleteProduto, setProduto } from './produtosAction'
import { FaPlus, FaArrowLeft, FaTrash, FaPen } from 'react-icons/fa'


class ProdutosPage extends Component {
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
                            <a onClick={() => {
                                this.setState({ visible: !this.state.visible })
                            }} className='btn btn-primary' style={{ margin: 10 }}>
                                {this.state.visible ? <span><FaArrowLeft color='#FFC10C' />  Voltar</span> : <span>Novo <FaPlus color='#FFC10C' /></span>}
                            </a>
                        </div>
                    </boxHeader>
                    <div className="box-body">

                        {this.state.visible ? <FormProduto funcao={() => this.setState({ visible: !this.state.visible })} onSubmit={this.props.CadProduto} /> :
                            <div style={{overflowX: 'auto'}}>
                                <table className='table'>
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
                                                            <a style={{marginLeft: 10}} href='#/editProduto' className='btn btn-primary' onClick={() => this.props.setProduto(pro)}>
                                                                <FaPen color='#FFC10C' />
                                                            </a>
                                                            <a style={{marginLeft: 10}}  className='btn btn-primary' onClick={() => this.props.DeleteProduto(pro.pro_in_codigo, this.props.token)}>
                                                                <FaTrash color='#FFC10C' />
                                                            </a>
                                                        </th>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>}

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

const mapDispatchToProps = dispatch => bindActionCreators({ CadProduto, FetchAllProdutos, DeleteProduto, setProduto }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProdutosPage)