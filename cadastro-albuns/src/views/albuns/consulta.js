import React from 'react'

import AlbumService from '../../app/albumService'
import {withRouter} from 'react-router-dom'

export default class ConsultaAlbuns extends React.Component{

    state = {
        albuns : []
    }

    constructor(){
        super()
        this.service = new AlbumService;
    }

    componentDidMount(){
        const albuns = this.service.obterAlbuns();
        this.setState({albuns})
    }

    preparaEditar = (sku) => {
        this.props.history.push('/cadastro-albuns/${sku}')
    }

    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>SKU</th>
                        <th>Preço</th>
                        <th>Artista</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.albuns.map((album, index) =>{
                        return(
                            <tr key={index}>
                                <th>album.nome</th>
                                <th>album.SKU</th>
                                <th>album.preco</th>
                                <th>album.artista</th>
                                <th>
                                    <button className= "btn-primary" >Editar</button>
                                    <button className= "btn-danger" >Remover</button>
                                </th>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table> 
            
        )
    }
}                