var Todo = Backbone.Model.extend({
    'defaults': {
        title: '',
        completed: false,
    },
    initialize: function() {
        console.log('this models has beean initailized.');
        console.log('attr:', JSON.stringify(this));
    }
});

var myTodo = new Todo();

var todo2 = new Todo({
    title: 'Check attributes of the logged models in the console.'
});
