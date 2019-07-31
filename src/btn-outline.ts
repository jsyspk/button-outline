const template = document.createElement("template");
template.innerHTML = `
<style>
button{
    border: 1px solid;
    background: transparent;
    padding: 12px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 3px;
    transition: background 0.3s, color 0.3s;
}
.default {
    border-color: #000000;
    color: #000000;
}
.default:hover{
    background: #000000;
    color: white;
}

.primary {
    border-color: #337AB7;
    color: #337AB7;
}
.primary:hover{
    background: #337AB7;
    color: white;
}

.secondary {
    border-color: #6C757D;
    color: #6C757D;
}
.secondary:hover{
    background: #6C757D;
    color:white;
}

.info {
    border-color: #5BC0DE;
    color: #5BC0DE;
}
.info:hover{
    background: #5BC0DE;
    color: white;
}

.warning {
    border-color: #F0AD4E;
    color: #F0AD4E;
}
.warning:hover{
    background: #F0AD4E;
    color:white;
}

.success {
    border-color: #5CB85C;
    color: #5CB85C;
}
.success:hover{
    background: #5CB85C;
    color: white;
}

.danger {
    border-color: #D9534F;
    color: #D9534F;
}
.danger:hover{
    background:#D9534F;
    color:white;
}

</style>
<button><slot>Placeholder data</slot></button>
`;

class OutlineButton extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector('button').classList.add(this.class);
    }

    get class() {
        let customClasses = 'default';
        if(this.hasAttribute('class')){
            customClasses = this.getAttribute("class");
        }
        return customClasses;
    }
}

window.customElements.define('btn-outline', OutlineButton);
