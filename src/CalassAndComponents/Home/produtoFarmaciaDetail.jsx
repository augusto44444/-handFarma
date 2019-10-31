import React, { Component } from 'react'
import Box from '../../common/ReuseComponents/Box'
import BoxHeader from '../../common/ReuseComponents/boxHeader'
import Title from '../../common/ReuseComponents/Title'
import { FaSearch, FaArrowLeft } from 'react-icons/fa'
import { clearProdutoFarmacia, setProdutoFarmacia } from '../ProdutoFarmacia/produtoFarmaciaAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class DetailPage extends Component {
    componentDidMount() {
        if (this.props.produto == null || this.props.produto == [] || this.props.produto == 0) {
            location.replace('#')
        }
    }

    render() {
        const produto = this.props.produto;
        console.log(produto)
        if (!produto) {
            return (
                <Box>
                    <BoxHeader>
                        <i style={{ color: '#FFC107' }} className='fa fa-refresh fa-spin'></i>
                    </BoxHeader>
                </Box>
            )
        }
        return (
            <Box>
                <BoxHeader>
                    <a href='/'>
                        <h3><FaArrowLeft color='#FFC107' /> Voltar</h3>
                    </a>
                    <Title text='Detalhes do Item' color='#212121' />
                </BoxHeader>
                <div className='box-body'>
                    <div>
                        <span style={{ fontSize: 16, fontWeight: 'bold' }} className='col-sm-12 col-md-4'>Nome produto: </span>
                        <span style={{ fontSize: 16 }} className='col-sm-12 col-md-8'>{produto.pro_st_nome}</span>
                    </div>

                    <div>
                        <span style={{ fontSize: 16, fontWeight: 'bold' }} className='col-sm-12 col-md-4'>Marca produto: </span>
                        <span style={{ fontSize: 16 }} className='col-sm-12 col-md-8'>{produto.pro_st_marca}</span>
                    </div>

                    <div>

                        <span style={{ fontSize: 16, fontWeight: 'bold' }} className='col-sm-12 col-md-4'>Classificação produto: </span>
                        <span style={{ fontSize: 16 }} className='col-sm-12 col-md-8'>{produto.pro_ch_classificacao}</span>
                    </div>

                    <div>

                        <span style={{ fontSize: 16, fontWeight: 'bold' }} className='col-sm-12 col-md-4'>Valor: </span>
                        <span style={{ fontSize: 16 }} className='col-sm-12 col-md-8'>{produto.pf_st_valor}</span>
                    </div>

                    <div>
                        <span style={{ fontSize: 16, fontWeight: 'bold' }} className='col-sm-12 col-md-4'>Nome Farmácia: </span>
                        <span style={{ fontSize: 16 }} className='col-sm-12 col-md-8'>{produto.far_st_nome}</span>
                    </div>

                    <div>
                        <span style={{ fontSize: 16, fontWeight: 'bold' }} className='col-sm-12 col-md-4'>Localização Farmácia: </span>
                        <span style={{ fontSize: 16 }} className='col-sm-12 col-md-8'>{`${produto.far_st_rua}, ${produto.far_in_numero}, ${produto.far_st_bairro}, ${produto.far_st_cidade}-${produto.far_ch_estado}`}</span>
                    </div>

                    <div>
                        <span style={{ fontSize: 16, fontWeight: 'bold' }} className='col-sm-12 col-md-4'>Horário de funcionamento: </span>
                        <span style={{ fontSize: 16 }} className='col-sm-12 col-md-8'>{produto.far_st_horario_funcionamento}</span>
                    </div>

                    <div>
                        <span style={{ fontSize: 16, fontWeight: 'bold' }} className='col-sm-12 col-md-4'>Telefone</span>
                        <span style={{ fontSize: 16 }} className='col-sm-12 col-md-8'>{produto.far_st_telefone}</span>
                    </div>


                </div>
            </Box>
        )
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({ clearProdutoFarmacia, setProdutoFarmacia }, dispatch);

const mapStateToProps = state => ({
    produto: state.produtos.produtoFarmacia
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)