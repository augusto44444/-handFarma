import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UserLogOut, login } from './usuarioAction'
import { IoMdHand } from 'react-icons/io'
import { editUserFarmacia } from '../Farmacia/FarmaciaAction'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            email: '',
            password: ''
        }

        this.editarPerfil = this.editarPerfil.bind(this)
    }
    changeOpen() {
        this.setState({ open: !this.state.open })
    }

    onTodoChange(field, value) {
        this.setState({
            [field]: value
        });
    }

    Login() {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        this.props.login(email, password)
    }

    editarPerfil() {
        const userId = this.props.auth.user.usu_in_codigo
        this.props.editUserFarmacia(userId)
        this.changeOpen();
    }

    render() {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                this.changeOpen()
                this.Login()
            }
        }

        const Formulario = () => {
            return (
                <form className='form'>
                    <p style={{ color: 'white', fontSize: 14, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center' }}>E- mail: </p>
                    <input
                        onKeyPress={handleKeyDown}
                        id='email'
                        className='form-control'
                        type='email'
                        placeholder='exemplo@exemplo.com'
                    />
                    <p style={{ color: 'white', fontSize: 14, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center' }}>Senha: </p>
                    <input
                        onKeyPress={handleKeyDown}
                        id='password'
                        className='form-control'
                        type='password'
                        placeholder='*********'
                    />
                </form>
            )
        }


        if (this.props.auth.logged) {
            const { usu_st_email: email } = this.props.auth.user
            return (
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li
                            className={`dropdown user user-menu ${this.state.open ? 'open' :
                                ''}`}>
                            <a href="javascript:;" onClick={() => this.changeOpen()}
                                aria-expanded={this.state.open ? 'true' : 'false'}
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                style={{ color: this.props.btnLoginColor }}>
                                <div className="user-image" alt="User Image">
                                    <i className='fa fa-sign-out logo-medium' style={{ fontSize: 25, justifyContent: 'center', alignItems: 'center' }}></i>
                                </div>
                                <span className="hidden-xs">Sair</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="user-header">
                                    <div>
                                        <p>
                                            <span style={{ color: 'white', fontSize: 20 }}>
                                                <b>Hand Farma</b>
                                            </span>
                                        </p>

                                        <IoMdHand color='#FFC107' style={{ fontSize: 70 }} />

                                        <p>
                                            <small style={{ color: 'white', fontSize: 20, width: '100%' }}>{email}</small>
                                        </p>
                                    </div>
                                </li>
                                <li className="user-footer" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <div className="pull-right">

                                        <a className="btn btn-default btn-flat" onClick={() => this.changeOpen()}>
                                            Cancelar
                                        </a>
                                    </div>
                                    {this.props.auth.user.usu_ch_type == "AD" ? null :
                                        <div>
                                            <a className="btn btn-default btn-flat" onClick={this.editarPerfil}>
                                                Editar perfil
                                            </a>
                                        </div>
                                    }
                                    <div>
                                        <a onClick={() => {
                                            this.props.UserLogOut();
                                            this.changeOpen();
                                        }}
                                            className="btn btn-default btn-flat">Sair</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li
                            className={`dropdown user user-menu ${this.state.open ? 'open' :
                                ''}`}>
                            <a href="javascript:;" onClick={() => this.changeOpen()}
                                aria-expanded={this.state.open ? 'true' : 'false'}
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                style={{ color: this.props.btnLoginColor }}>
                                <div className="user-image" alt="User Image">
                                    <i className='fa fa-sign-in logo-medium' style={{ fontSize: 25 }}></i>
                                </div>
                                <span className="hidden-xs">Entrar</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="user-header">
                                    <Formulario />

                                </li>
                                <li className="user-footer">

                                    <div className="pull-right">
                                        <a onClick={() => {
                                            this.Login();
                                            this.changeOpen()
                                        }}
                                            className="btn btn-default btn-flat">Entrar</a>
                                    </div>
                                    <div >
                                        <a onClick={() => this.changeOpen()}
                                            className="btn btn-default btn-flat">Cancelar</a>
                                    </div>


                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        }
    }
}


const mapStateToProps = state => ({ auth: state.user })
const mapDispatchToProps = dispatch => bindActionCreators({ UserLogOut, login, editUserFarmacia }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
