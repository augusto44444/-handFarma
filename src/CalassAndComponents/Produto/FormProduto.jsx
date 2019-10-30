import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toastr } from 'react-redux-toastr'
import { FaPlus, FaPen } from 'react-icons/fa'

class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editPass: false,
            render: true
        }
    }

    componentDidMount() {
        if (this.props.produto != 0 && this.props.edit == true) {
            const { pro_in_codigo, pro_st_nome, pro_st_marca, pro_st_cod_barra, pro_ch_classificacao } = this.props.produto

            console.log(this.props.produto)

            this.props.initialize({
                id: pro_in_codigo,
                nome: pro_st_nome,
                marca: pro_st_marca,
                codBarra: pro_st_cod_barra,
                classificacao: pro_ch_classificacao
            })
        } else if(this.props.edit == true){
            location.replace('#/produtoPage')
        }else {
            this.props.initialize({
                token: this.props.token
            })
        }
    }


    renderField({ input, label, type, placeholder, id }) {
        return (
            <div className='form-group'>
                <label className='col-sm-2 control-label'>{label}</label>
                <div className="col-sm-10">
                    <input {...input} id={id} className="form-control" placeholder={placeholder} type={type} />
                </div>
            </div>
        )
    }


    render() {
        const { handleSubmit, submitting } = this.props
        return (
            <form className='form-horizontal' onSubmit={handleSubmit}>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                        <h3 style={{ color: '#FFC10C' }}>
                            {this.props.edit ? 'Edição de Produto' : 'Cadastro de Produto'}
                        </h3>
                        <h3 style={{ justifyContent: 'center', marginLeft: 10 }}>
                            {this.props.edit ? <FaPen color='#00BCD4' /> : <FaPlus color='#00BCD4' />}
                        </h3>
                    </div>
                    <Field
                        name="nome"
                        type="text"
                        id='nome'
                        component={this.renderField}
                        label="Nome: "
                        placeholder='Exemplo'
                    />
                    <Field
                        name="marca"
                        type="text"
                        id='marca'
                        component={this.renderField}
                        label="Marca: "
                        placeholder='Exemplo'
                    />
                    <Field
                        name="codBarra"
                        type="text"
                        id='marca'
                        component={this.renderField}
                        label="Código de barra: "
                        placeholder='9999999999'
                    />
                    <div className='form-group'>
                        <label className='col-sm-12 col-md-2 control-label'>Classificação: </label>
                        <div className='col-sm-12 col-md-10'>
                            <Field
                                className='form-control'
                                name="classificacao"
                                component='select'
                            >
                                <option value='Não possui'>Escolha...</option>
                                <option value='Livre'>Livre</option>
                                <option value='MIPs'>MIPs</option>
                                <option value='Tarja Amarela'>Tarja amarela</option>
                                <option value='Tarja vermelha sem retenção da receita'>Tarja vermelha sem retenção da receita</option>
                                <option value='Tarja vermelha'>Tarja vermelha</option>
                                <option value='Tarja preta'>Tarja preta</option>
                            </Field>
                        </div>
                    </div>

                    <div>
                        <button onClick={() => {
                            setTimeout(this.props.funcao, 500)
                        }} type='submit' className="btn btn-primary" style={{ margin: 10, marginLeft: 0 }}>{this.props.edit == true ? "Editar" : 'Cadastrar'} </button>
                        <a href={this.props.edit ? '#/produtoPage' : null} className='btn btn-primary' onClick={this.props.funcao} style={{ margin: 10 }} >Cancelar</a>
                    </div>
                </div>
            </form>
        )
    }
}

CreateUser = reduxForm({
    form: 'createUser'
})(CreateUser)

// const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);

const mapStateToProps = state => ({ token: state.user.token, produto: state.produtos.produto })

export default connect(mapStateToProps, null)(CreateUser)