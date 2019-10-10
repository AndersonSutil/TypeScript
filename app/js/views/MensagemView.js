class MensagemView extends View {
    update(model) {
        this._elemento.html(this.template(model));
    }
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
