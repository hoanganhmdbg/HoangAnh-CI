const $template = document.getElementById("meme-container-tempalte");
//tao shadow-dom
class Memecontainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
    //xét nhưng thuôc tính có ảnh hưởng đến nội dung
    static get observedAttributes(){
        return ['name','date-modified','image','description'];
    }
    //dc goi khi component dc sinh ra
    connectedCallback(){
        console.log("vua co 1 cai meme dc tao ");
    }
    //dc goi thi thuoc tinhs cua component thay doi
    attributeChangedCallback(attrName,oldValue,newValue){
        console.log(attrName, newValue);
        if(attrName == 'name'){
            this.shadowRoot.querySelector(".meme-name").innerHTML= newValue;
        }else if(attrName == 'date-modified'){
            this.shadowRoot.querySelector(".meme-date-modified").innerHTML = newValue
        }else if(attrName == 'image'){
            this.shadowRoot.querySelector(".meme-photo").src = newValue;
        }else if(attrName == 'description'){
            this.shadowRoot.querySelector(".meme-description").innerHTML = newValue
        }
    }
    //dc goi component mat di
    disconnectedCallback(){
        console.log("vua co 1 meme dc xoa di khi qua nham");
    }
}
//custom element
window.customElements.define('meme-container', Memecontainer);
