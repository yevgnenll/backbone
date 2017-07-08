var Todo = Backbone.Model.extend({
    'defaults': {
        title: '',
        completed: false,
    },
});

var myTodo = new Todo({
    title: 'Set through instantiation',
});

console.log(JSON.stringify(myTodo));

myTodo.set('title', 'Title attribute set through Model.set()');

console.log(JSON.stringify(myTodo));

