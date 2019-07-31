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
</style>
<button><slot>Placeholder data</slot></button>
`;

class OutlineButton extends HTMLElement {

    private validTypes = ['button', 'submit', 'reset'];

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        let btn = this.shadowRoot.querySelector('button');
        //set type
        btn.setAttribute('type', this.type);
        //set classes
        btn.classList.add(this.class);
    }

    get type() {
        let btnType = 'button';
        if(this.hasAttribute('type')){
            let requiredType = this.getAttribute("type");
            if(this.validTypes.indexOf(requiredType) !== -1)
            {
                btnType = requiredType;
            }
        }
        return btnType;
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
