var Meal = Backbone.Model.extend({
    defaults: {
        'appetizer': 'caesar salad',
        'entree': 'hamburger',
        'dessert': 'cheesecake',
    }
});

var Lunch = new Meal({ appetizer: 'soup', entree: 'pizza'});
