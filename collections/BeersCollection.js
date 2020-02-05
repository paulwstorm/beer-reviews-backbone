var BeersCollection = Backbone.Collection.extend({
  model: BeerModel,

  addBeer: function (name,style,abv,image_url) {
    console.log("Inside BeersCollection, beer name is" + name)
    this.add({
      name: name,
      style: style,
      abv: abv,
      image_url: image_url
    });
  }
});
