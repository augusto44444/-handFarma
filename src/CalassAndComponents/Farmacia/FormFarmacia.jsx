import React, { Component } from 'react'
import Box from '../../common/ReuseComponents/Box'
import Title from '../../common/ReuseComponents/Title'
import boxHeader from '../../common/ReuseComponents/boxHeader'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveFarmacia } from './FarmaciaAction'

class FormFarmacia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Estados: []
        }
    }


    componentDidMount() {
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
            <Box>
                <boxHeader>
                    <Title text='Cadastrar Farmácia' style={{ marginLeft: 10 }} />
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
                            label='E-mail: '
                            type='email'
                            placeholder='exemplo@mail.com'
                            id='MAIL'
                        />
                    </div>
                    <div style={{ marginTop: 10, marginBottom: 10 }}>
                        <Input
                            label='Senha: '
                            type='password'
                            placeholder='*******'
                            id='senha'
                        />
                    </div>
                    <div style={{ marginTop: 10, marginBottom: 10 }}>
                        <Input
                            label='Confirmar senha: '
                            type='password'
                            placeholder='*******'
                            id='confirm'
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


                    <div style={{ marginTop: 10, marginBottom: 10 }}>
                        <Input
                            label='Telefone: '
                            type='number'
                            placeholder='40028922'
                            id='telefone'
                        />
                    </div>

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
                            usu_st_email: document.getElementById('MAIL').value,
                            usu_st_password: document.getElementById('senha').value,
                            confirm: document.getElementById('confirm').value,
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

                        }

                        this.props.saveFarmacia(values)

                    }} >
                        Salvar
                    </button>
                    <button style={{ marginLeft: 20 }} className='btn btn-primary' onClick={() => location.replace('#')}>
                        Cancelar
                    </button>
                </div>
            </Box>
        )
    }
}
const mapStateToProps = state => ({
    user: state.user.user,
    userData: state.user.userData
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ saveFarmacia }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormFarmacia)