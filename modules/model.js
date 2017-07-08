var Todo = Backbone.Model.extend({
    'defaults': {
        title: '',
        completed: false,
    },
});

var myTodo = new Todo();

var todo2 = new Todo({
    title: 'Check attributes of the logged models in the console.'
});

var todo3 = new Todo({
    title: 'This todo is done, so take no action on this one',
    completed: true
});

console.log('title:', myTodo.get('title'));

console.log('title:', todo2.get('title'));

console.log('title:', todo3.get('title'));
