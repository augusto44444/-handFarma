import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Home from '../CalassAndComponents/Home/Home'
import FarmaciaPage from '../CalassAndComponents/Farmacia/FarmaciaPage'
import FormFarmacia from '../CalassAndComponents/Farmacia/FormFarmacia'
import ProdutosPage from '../CalassAndComponents/Produto/ProdutosPage'
import editProduto from '../CalassAndComponents/Produto/editProduto'
import editFarmacia from '../CalassAndComponents/Farmacia/editFarmacia'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/farmacia' component={FarmaciaPage} />
        <Route path='/cadfarmacia' component={FormFarmacia} />
        <Route path='/editFarmacia' component={editFarmacia} />
        <Route path='/produtoPage' component={ProdutosPage} />
        <Route path='/editProduto' component={editProduto} />

        <Redirect from='*' to='/' />
    </Router>
)
