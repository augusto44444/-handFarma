import React, { Component } from 'react'
import Box from '../../common/ReuseComponents/Box'
import Title from '../../common/ReuseComponents/Title'
import boxHeader from '../../common/ReuseComponents/boxHeader'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editFarmacia } from './FarmaciaAction'
import { FaPen, FaArrowLeft } from 'react-icons/fa'

class FormFarmacia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Estados: []
        }
    }



    componentDidMount() {
        if (this.props.farmacia != 0) {
            this.setState({
                Estados: [
                    { id: 1, UF: 'AC' },
                    { id: 2, UF: 'AL' },
                    { id: 3, UF: 'AP' },
                    { id: 4, UF: 'AM' },
                    { id: 5, UF: 'BA' },
                    { id: 6, UF: 'CE' },
                    { id: 7, UF: 'DF' },
                    { id: 8, UF: 'ES' },
                    { id: 9, UF: 'GO' },
                    { id: 10, UF: 'MA' },
                    { id: 11, UF: 'MT' },
                    { id: 12, UF: 'MS' },
                    { id: 13, UF: 'MG' },
                    { id: 14, UF: 'PA' },
                    { id: 15, UF: 'PB' },
                    { id: 16, UF: 'PR' },
                    { id: 17, UF: 'PE' },
                    { id: 18, UF: 'PI' },
                    { id: 19, UF: 'RJ' },
                    { id: 20, UF: 'RN' },
                    { id: 21, UF: 'RS' },
                    { id: 22, UF: 'RO' },
                    { id: 23, UF: 'RR' },
                    { id: 24, UF: 'SC' },
                    { id: 25, UF: 'SP' },
                    { id: 26, UF: 'SE' },
                    { id: 27, UF: 'TO' },
                ]
            })
            setTimeout(() => {
                document.getElementById('cnpj').value = this.props.farmacia.far_st_cnpj;
                document.getElementById('cep').value = this.props.farmacia.far_st_cep;
                document.getElementById('estado').value = this.props.farmacia.far_ch_estado;
                document.getElementById('cidade').value = this.props.farmacia.far_st_cidade;
                document.getElementById('bairro').value = this.props.farmacia.far_st_bairro;
                document.getElementById('rua').value = this.props.farmacia.far_st_rua;
                document.getElementById('numero').value = this.props.farmacia.far_in_numero;
                document.getElementById('nome').value = this.props.farmacia.far_st_nome;
                document.getElementById('rede').value = this.props.farmacia.far_st_rede;
                document.getElementById('horarioFunc').value = this.props.farmacia.far_st_horario_funcionamento;
                document.getElementById('telefone').value = this.props.farmacia.far_st_telefone;
                document.getElementById('celular').value = this.props.farmacia.far_st_celular;
            }, 1000)
        } else {
            location.replace('#/farmacia')
        }

    }

    render() {
        const Input = ({ label, placeholder, id, type, maxLength }) => (
            <div>
                <span className='col-sm-12 col-md-2' style={{ marginBottom: 10 }}>{label}</span>
                <div className='col-sm-12 col-md-10'>
                    <input style={{ marginBottom: 10 }} type={type} placeholder={placeholder} id={id} className='form-control' maxLength={maxLength || null} />
                </div>
            </div>
        )
        const Select = ({ label, firstValue, id }) => (
            <div>
                <span className='col-sm-12 col-md-2'>{label}</span>
                <div className='col-sm-12 col-md-10'>
                    <select style={{ marginBottom: 10 }} id={id} className='form-control'>
                        <option value={0}>{firstValue}</option>
                        {this.state.Estados.map(estado => (
                            <option key={estado.id} value={estado.UF}>{estado.UF}</option>
                        ))}
                    </select>
                </div>
            </div>
        )

        return (
            <div style={{ paddingBottom: 30 }}>
                <Box>
                    <boxHeader>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Title text='Farmácia Page' />
                            <a href='#/farmacia'
                                className='btn btn-primary' style={{ margin: 10 }}>
                                <span> <FaArrowLeft color='#FFC10C' /> voltar</span>
                            </a>
                        </div>
                    </boxHeader>
                    <div className="box-body">
                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                            <Input
                                label='CNPJ: '
                                type='text'
                                placeholder='999.999.999/9999.99'
                                id='cnpj'
                            />
                        </div>
                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                            <Input
                                label='CEP: '
                                type='text'
                                placeholder='99999-999'
                                id='cep'
                            />
                        </div>

                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                            <Select
                                label='Estado: '
                                firstValue='Escolha...'
                                id='estado'
                            />
                        </div>
                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                            <Input
                                label='Cidade: '
                                type='text'
                                placeholder='Exemplo'
                                id='cidade'
                            />
                        </div>

                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                            <Input
                                label='Bairro: '
                                type='text'
                                placeholder='Bairro..'
                                id='bairro'
                            />
                        </div>

                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                            <Input
                                label='Rua: '
                                type='text'
                                placeholder='Rua...'
                                id='rua'
                            />
                        </div>
                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                            <Input
                                label='Numero: '
                                type='Number'
                                placeholder='99'
                                id='numero'
                            />
                        </div>
                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                            <Input
                                label='Nome: '
                                type='Text'
                                placeholder='Farmacia exemplar'
                                id='nome'
                            />
                        </div>

                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                            <Input
                                label='Rede: '
                                type='Text'
                                placeholder='Rede exemplar São paulo'
                                id='rede'
                            />
                        </div>

                        <span className='col-sm-12 col-md-2'></span>
                        <span className='col-sm-12 col-md-10'>Campo só aceita Números</span>

                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                            <Input
                                label='Telefone: '
                                type='number'
                                placeholder='40028922'
                                id='telefone'
                            />
                        </div>

                        <span className='col-sm-12 col-md-2'></span>
                        <span className='col-sm-12 col-md-10'>Campo só aceita Números</span>
                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                            <Input
                                label='Celular: '
                                type='number'
                                placeholder='11999999999'
                                id='celular'
                            />
                        </div>


                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                            <Input
                                label='Horário funcionamento: '
                                type='text'
                                placeholder='Segunda a sexta das 08:00 as 20:00'
                                id='horarioFunc'
                            />
                        </div>

                    </div>
                    <div className='box-footer'>
                        <button className='btn btn-primary' onClick={() => {
                            const values = {
                                far_st_cnpj: document.getElementById('cnpj').value,
                                far_st_cep: document.getElementById('cep').value,
                                far_ch_estado: document.getElementById('estado').value,
                                far_st_cidade: document.getElementById('cidade').value,
                                far_st_bairro: document.getElementById('bairro').value,
                                far_st_rua: document.getElementById('rua').value,
                                far_in_numero: document.getElementById('numero').value,
                                far_st_nome: document.getElementById('nome').value,
                                far_st_rede: document.getElementById('rede').value,
                                far_st_horario_funcionamento: document.getElementById('horarioFunc').value,
                                far_st_telefone: document.getElementById('telefone').value,
                                far_st_celular: document.getElementById('celular').value,
                                far_in_codigo: this.props.farmacia.far_in_codigo,
                                usu_in_codigo: this.props.farmacia.usu_in_codigo
                            }

                            this.props.editFarmacia(values)

                        }} >
                            Salvar
                    </button>
                        <button style={{ marginLeft: 20 }} className='btn btn-primary' onClick={() => location.replace('#/farmacia')}>
                            Cancelar
                    </button>
                    </div>
                </Box>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    user: state.user.user,
    userData: state.user.userData,
    farmacia: state.farmacia.farmacia
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ editFarmacia }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormFarmacia)