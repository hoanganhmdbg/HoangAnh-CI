const $temp = document.getElementById("anime-template");
class animeContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild($temp.content.cloneNode(true));
    }
    static get observedAttributes(){
        return ['photo','name','category','price','chapters'];
    }
    connectedCallback(){
        console.log("vua co 1 cai anime dc tao ");
    }
    attributeChangedCallback(attrName,oldValue,newValue){
        console.log(attrName, newValue);
        if(attrName == 'photo'){
            this.shadowRoot.querySelector('.anime-photo').src = newValue;
        }else if(attrName == 'name'){
            this.shadowRoot.querySelector('.anime-name').innerHTML = newValue;
        }else if(attrName == 'category'){
            this.shadowRoot.querySelector('.anime-category').innerHTML = newValue;
        }else if(attrName == 'price'){
            this.shadowRoot.querySelector('.anime-price').innerHTML = newValue;
        }else if(attrName == "chapters"){
            this.shadowRoot.querySelector('.anime-chapters').innerHTML = newValue;
        }
    }
    disconnectedCallback(){
        console.log("vua co 1 anime dc xoa di khi qua nham");
    }
}
window.customElements.define('anime-container',animeContainer);