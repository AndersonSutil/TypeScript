var Views;
(function (Views) {
    var view = Views.View;
    class MensagemView extends view {
        update(model) {
            this._elemento.html(this.template(model));
        }
        template(model) {
            return `<p class="alert alert-info">${model}</p>`;
        }
    }
    Views.MensagemView = MensagemView;
})(Views || (Views = {}));
