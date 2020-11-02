const $template = document.getElementById("meme-container-tempalte");
//tao shadow-dom
class Memecontainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
    //dc goi khi component dc sinh ra
    connectedCallback(){
        console.log("vua co 1 cai meme dc tao ");
    }
    //dc goi thi thuoc tinhs cua component thay doi
    attributeChangedCallback(name,oldValue,newVale){
        
    }
    //dc goi component mat di
    disconnectedCallback(){
        console.log("vua co 1 meme dc xoa di khi qua nham");
    }
}
//custom element
window.customElements.define('meme-container', Memecontainer);
