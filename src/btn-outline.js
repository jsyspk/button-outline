var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var template = document.createElement("template");
template.innerHTML = "\n<style>\nbutton{\n    border: 1px solid black;\n    background: transparent;\n    color: black;\n    padding: 12px 20px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n    border-radius: 3px;\n}\n.primary {\n    border-color: #337AB7;\n    color: #337AB7;\n}\n.secondary {\n    border-color: #6C757D;\n    color: #6C757D;\n}\n.info {\n    border-color: #5BC0DE;\n    color: #5BC0DE;\n}\n.warning {\n    border-color: #F0AD4E;\n    color: #F0AD4E;\n}\n.success {\n    border-color: #5CB85C;\n    color: #5CB85C;\n}\n.danger {\n    border-color: #D9534F;\n    color: #D9534F;\n}\n</style>\n<button class=\"default\"></button>\n";
var OutlineButton = /** @class */ (function (_super) {
    __extends(OutlineButton, _super);
    function OutlineButton() {
        var _this = _super.call(this) || this;
        _this.btnTypes = ['primary', 'secondary', 'info', 'success', 'warning', 'danger'];
        _this.attachShadow({ mode: 'open' });
        _this.elm = _this.shadowRoot.appendChild(template.content.cloneNode(true));
        return _this;
    }
    OutlineButton.prototype.connectedCallback = function () {
        if (this.btnTypes.indexOf(this.is)) {
            this.elm.classList.add(this.is);
        }
    };
    Object.defineProperty(OutlineButton.prototype, "is", {
        get: function () {
            return this.getAttribute("is");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OutlineButton.prototype, "content", {
        get: function () {
            return this.getAttribute("content");
        },
        enumerable: true,
        configurable: true
    });
    return OutlineButton;
}(HTMLElement));
window.customElements.define('btn-outline', OutlineButton);
