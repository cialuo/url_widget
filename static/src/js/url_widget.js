/**
 * Created by wt on 2015/11/16.
 */
openerp.url_widget = function (instance, local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    local.FieldCharUrl = instance.web.form.AbstractField.extend({
        init: function () {
            this._super.apply(this, arguments);
            this.set("value", "");
        },
        start: function () {
            this.on("change:effective_readonly", this, function () {
                this.display_field();
                this.render_value();
            });
            this.display_field();
            return this._super();
        },
        display_field: function () {
            var self = this;
            this.$el.html(QWeb.render("FieldCharUrl", {widget: this}));
            if (!this.get("effective_readonly")) {
                this.$("input").change(function () {
                    self.internal_set_value(self.$("input").val());
                });
            }
        },
        render_value: function () {
            if (this.get("effective_readonly")) {
                this.$("a").attr("href",this.get("value"));
                this.$("img").attr("src",this.get("value"));
            } else {
                this.$("#input_url").val(this.get("value"));
            }
        },
    });

    instance.web.form.widgets.add('charURL', 'instance.url_widget.FieldCharUrl');
}