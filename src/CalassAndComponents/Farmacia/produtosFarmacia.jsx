import React, { Component } from 'react'
import Box from '../../common/ReuseComponents/Box'
import Title from '../../common/ReuseComponents/Title'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProdutosByFarmacia} from '../Produto/produtosAction'
import { EditPF } from '../ProdutoFarmacia/produtoFarmaciaAction'
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
                                    <label style={{ marginBottom: 10, marginTop: 10 }} className='col-sm-12 col-md-3'>
                                        Quantidade:
                                    </label>
                                    <div className="col-sm-12 col-md-9">
                                        <input style={{ marginBottom: 10, marginTop: 10 }} type="number" className='form-control' placeholder='999' id='qtd' />
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-2">
                                    <a onClick={() => {
                                        const obj = {
                                            valor: document.getElementById('valor').value,
                                            qtd: document.getElementById('qtd').value,
                                            far_in_codigo: this.state.produto.far_in_codigo,
                                            pro_in_codigo: this.state.produto.pro_in_codigo,
                                            codigo: this.state.produto.pf_in_codigo
                                        }
                                        this.props.EditPF(obj)
                                        this.setState({produto: null, visible:false})
                                    }} style={{ marginBottom: 10, marginTop: 10 }} className='btn btn-primary'>Editar</a>
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
                                    <th>Valor</th>

                                </tr>
                                <tbody>
                                    {
                                        produtos.map((pro, id) => {

                                            return (
                                                <tr onClick={() => {
                                                    this.setState({ visible: !this.state.visible, produto: pro })
                                                    console.log(pro)
                                                    setTimeout(() => {
                                                        document.getElementById('valor').value = pro.pf_st_valor;
                                                        document.getElementById('qtd').value = pro.pf_in_quantidade
                                                    })
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
            </div >
        )
    }
}

const mapStateToProps = state => ({
    token: state.user.token,
    produtos: state.produtos.produtos,
    farmacia: state.user.userData
});

const mapDispatchToProps = dispatch => bindActionCreators({ getProdutosByFarmacia, EditPF }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProdutosFarmacia)