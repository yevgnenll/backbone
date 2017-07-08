var Todo = Backbone.Model.extend({
    'defaults': {
        title: '',
        completed: false,
    },
    initialize: function() {
        console.log('This model has been initialized.');
        this.on('change', function(){
            console.log('- Values for this model have changed.');
        });
    },
});

var myTodo = new Todo(); 

myTodo.set('title', 'The listener is tirggered whenever an attribute value changed');
console.log('title has chaged: ', myTodo.get('title'));

myTodo.set('completed', true);

console.log('completed has chaged: ', myTodo.get('completed'));

myTodo.set({
    title: 'Changing more than one attribute at the same time only tirggers',
    completed: true
});
