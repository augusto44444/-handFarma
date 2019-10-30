import React, { Component } from 'react'
import Box from '../../common/ReuseComponents/Box'
import Title from '../../common/ReuseComponents/Title'
import boxHeader from '../../common/ReuseComponents/boxHeader'
import FormProduto from './FormProduto'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editProduto, FetchAllProdutos, DeleteProduto, setProduto } from './produtosAction'
import { FaPlus, FaArrowLeft, FaTrash, FaPen } from 'react-icons/fa'


class EditProdutopage extends Component {
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
                            <Title text='Farmácia Page' />
                            <a href='#/produtoPage' className='btn btn-primary' style={{margin: 10}}>
                                 <span><FaArrowLeft color='#FFC10C' />  Voltar</span> 
                            </a>
                        </div>
                    </boxHeader>
                    <div className="box-body">
                        <FormProduto edit={true} funcao={() => this.setState({ visible: !this.state.visible })} onSubmit={this.props.editProduto} />

                    </div>
                </Box >
            </div >
        )
    }
}

const mapStateToProps = state => ({
    token: state.user.token,
    produtos: state.produtos.produtos
});

const mapDispatchToProps = dispatch => bindActionCreators({ editProduto, FetchAllProdutos, DeleteProduto, setProduto }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditProdutopage)