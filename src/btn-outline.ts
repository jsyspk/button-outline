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
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 3px;
}
.default {
    border-color: #000000;
    color: #000000;
}

.primary {
    border-color: #337AB7;
    color: #337AB7;
}
.secondary {
    border-color: #6C757D;
    color: #6C757D;
}
.info {
    border-color: #5BC0DE;
    color: #5BC0DE;
}
.warning {
    border-color: #F0AD4E;
    color: #F0AD4E;
}
.success {
    border-color: #5CB85C;
    color: #5CB85C;
}
.danger {
    border-color: #D9534F;
    color: #D9534F;
}
</style>
<button><slot>Placeholder data</slot></button>
`;

class OutlineButton extends HTMLElement {

    private btnTypes = ['primary', 'secondary', 'info', 'success', 'warning', 'danger'];

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {

            this.shadowRoot.querySelector('button').classList.add(this.is);
    }

    get is() {
        let btnType = 'default';
        if(this.hasAttribute('is')){
            let askedType = this.getAttribute("is");
            if(this.btnTypes.indexOf(askedType) !== -1) {
                btnType = askedType;
            }
        }

        return btnType;
    }


}

window.customElements.define('btn-outline', OutlineButton);
