var Person = new Backbone.Model();
Person.set({name: 'Jeremy'}, {silent: true});

console.log(!Person.hasChanged(0));

console.log(!Person.hasChanged(''));
