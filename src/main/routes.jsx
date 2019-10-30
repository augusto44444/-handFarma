import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Home from '../CalassAndComponents/Home/Home'
import FarmaciaPage from '../CalassAndComponents/Farmacia/FarmaciaPage'
import FormFarmacia from '../CalassAndComponents/Farmacia/FormFarmacia'
import ProdutosPage from '../CalassAndComponents/Produto/ProdutosPage'
import editProduto from '../CalassAndComponents/Produto/editProduto'
import editFarmacia from '../CalassAndComponents/Farmacia/editFarmacia'
import ProdutoFarmacia from '../CalassAndComponents/ProdutoFarmacia/ProdutoFarmacia'
import ProdutosFarmacia from '../CalassAndComponents/Farmacia/produtosFarmacia'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/farmacia/produtos' component={ProdutosFarmacia} />
        <Route path='/farmacia' component={FarmaciaPage} />
        <Route path='/cadfarmacia' component={FormFarmacia} />
        <Route path='/editFarmacia' component={editFarmacia} />
        <Route path='/produtoPage' component={ProdutosPage} />
        <Route path='/editProduto' component={editProduto} />
        <Route path='/produtoList' component={ProdutoFarmacia} />

        <Redirect from='*' to='/' />
    </Router>
)
