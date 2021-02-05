

const ALBUNS = '_ALBUNS';

export function ErroValidacao(errors) {
    this.errors = errors;
}
   
export default class AlbumService {

    validar = (album) => {
        const errors = []

        if(!album.nome){
            errors.push('O campo Nome é de ´preenchimento obrigatório')
        }
        if(!album.sku){
            errors.push('O campo SKU é de ´preenchimento obrigatório')
        }
        if(!album.preco || album.preco <0){
            errors.push('O campo Preço deve ter um valor maior que zero')
        }
        if(!album.artista){
            errors.push('O campo Artista é de ´preenchimento obrigatório')
        }
        if(errors.length > 0){
            throw new ErroValidacao(errors)
        }
    } 

    obterAlbuns = () => {
        const albuns = localStorage.getItem(ALBUNS)
        return JSON.parse(albuns)
    }
    salvar = (album) => {
        this.validar(album)


        let albuns = localStorage.getItem(ALBUNS)
        
        if(!albuns) {
            albuns = [] 
        }else{
            albuns = JSON.parse (albuns)
        }

        albuns.push (album);

        localStorage.setItem(ALBUNS, JSON.stringify(albuns))
    }
}