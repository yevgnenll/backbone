var Todo = Backbone.Model.extend({});

var todo1 = new Todo();
console.log(JSON.stringify(todo1));

var todo2 = new Todo({
    title: 'check the attributes of both model instances int the console',
    completed: true,
});

console.log(JSON.stringify(todo2));

