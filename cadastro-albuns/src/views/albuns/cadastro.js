import React from 'react';

const estadoInicial = {
        nome: '',
        SKU: '',
        descricao: '',
        preco: 0,
        artista: ''
}

class CadastroAlbuns extends React.Component{

    state = estadoInicial;

    onChange = (e) =>  {
        const valor = e.target.value
        const nomeDoCampo = e.target.name
        this.setState({[nomeDoCampo] : valor })
    }

    onSubmit = (e) => {
        console.log(this.state)
    }

    limpaCampos = () => {
        this.setState(estadoInicial)
    }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Cadastro de Albuns
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text"
                                       name="nome"
                                       onChange={this.onChange}
                                       value={this.state.nome}
                                       className="form-control"/>
                            </div>

                        </div>
                        <div className="col-md-6"t>
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input type="text" 
                                       name="sku"
                                       onChange={this.onChange}
                                       value={this.state.sku}
                                       className="form-control"/>
                            </div>
                       
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição: </label>
                                <textarea value={this.state.descricao}
                                 onChange={this.onChange}
                                 name="descricao" 
                                 className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço: *</label>
                                <input type="text" value={this.state.preco}
                                onChange={this.onChange}
                                name="preco" 
                                className="form-control"/>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Artista: *</label>
                                <input type="text" 
                                       value={this.state.artista}
                                       onChange={this.onChange}
                                       name="artista" 
                                       className="form-control"/>
                            </div>
                       
                        </div>
                     </div>
                     <div className="row">
                        < div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                        </div>
                        < div className="col-md-1">
                            <button onClick={this.limpaCampos} className="btn btn-primary">Limpar</button>
                        </div>
                     </div>
                </div>     
            </div>
        )
    }

}
export default CadastroAlbuns;