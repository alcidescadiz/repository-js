export class ejemplo extends HTMLElement{

    constructor(){
        super()
        this.mensaje = 'hola'
    }

    connectedCallback(){
        this.innerHTML = this.mensaje
    }
    attributeChangedCallback(atribute,  oldValor, newValor){
       if (atribute === 'nombre') {
        this.mensaje = `hola ${newValor}`  
        console.log(atribute,  oldValor, newValor)
       }
    }
    static get observedAttributes(){
        return ['nombre']
    }
}

window.customElements.define('ejemplo-uno', ejemplo)

