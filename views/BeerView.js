var BeerView = Backbone.View.extend({
  tagName:  'div',

  // Cache the template function for a single item.
  template: Handlebars.compile($('#beer-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this
  }
})
