import React from 'react'
import MenuItem from '../ReuseComponents/menuItem'
import MenuTree from '../ReuseComponents/menuTree'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Menu extends React.Component {


    render() {

        const AdminOnly = () => {
            const { usu_ch_type } = this.props.user.user

            if (usu_ch_type == 'AD') {
                return (
                    <span className='sidebar-menu'>
                        <MenuTree label='Admin' icon='user-secret'>
                            <MenuItem path='#/produtoPage' label='Produto' icon='list' />
                            <MenuItem path='#/farmacia' label='farmaciaPage' icon='plus' />
                        </MenuTree>
                    </span>
                )
            } else {
                return null
            }
        }

        const farmaciaOnly = () => {
            const { usu_ch_type } = this.props.user.user

            if (usu_ch_type == 'FA' || usu_ch_type == 'AD') {
                return (
                    <span className='sidebar-menu'>
                        <MenuTree label='Farmácia' icon='plus'>
                            <MenuItem path='#/produtoList' label='VincularProdutos' icon='plus' />
                            {usu_ch_type == 'AD' ? null : <MenuItem path='#/farmacia/produtos' label='Produtos da farmácia' icon='plus' />}
                        </MenuTree>
                    </span>
                )
            } else {
                return null
            }
        }

        return (
            <ul className='sidebar-menu'>
                <MenuItem path='#/' label='Home' icon='home' />
                {farmaciaOnly()}
                {AdminOnly()}
            </ul>
        )
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch);

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu)