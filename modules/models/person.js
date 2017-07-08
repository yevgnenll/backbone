var Person = new Backbone.Model({
    name: 'Jeremy',
});

Person.validate = function(attrs) {
    if (!attrs.name) {
        return 'I need your name';
    }
};

Person.set({name: 'Samuel'});
console.log(Person.get('name'));

console.log(Person.unset('name', {validate: true}));
// false
console.log(Person.get('name'));

console.log(JSON.stringify(Person));
