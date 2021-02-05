import React from 'react';

import {HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/home'
import CadastroAlbuns from './views/albuns/cadastro'

export default() => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/cadastro-albuns" component={CadastroAlbuns}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        </HashRouter>
    )
}
