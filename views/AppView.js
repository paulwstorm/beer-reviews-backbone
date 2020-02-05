var AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function () {
    this.listenTo(this.model.get('beers'), "add", this.addBeer)
  },

  events: {
    'click .submit-beer': 'createBeer'
  },

  createBeer: function () {
    console.log('test, beer name is: ' + this.$('#name-input').val());

    this.model.get('beers').addBeer(
      this.$('#name-input').val(),
      this.$('#style-input').val(),
      this.$('#abv-input').val(),
      this.$('#img-input').val()
    );
  },

  addBeer: function(beer) {
    var beerView = new BeerView({model: beer})

    this.$(".beer-list").append(beerView.render().el)
  },

  renderBeers: function () {
  this.model.get('beers').each(function (m) {
    this.renderBeer(m);
    }, this);
  }
});
