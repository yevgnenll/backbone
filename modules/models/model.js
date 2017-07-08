var Todo = Backbone.Model.extend({
    'defaults': {
        title: '',
        completed: false,
    },
    initialize: function() {
        console.log('This model has been initialized.');
        this.on('change', function(){
            console.log('- Values for this model have changed.');
            console.log(JSON.stringify(this));
        });
    },
    setTitle: function(newTitle) {
        this.set({ title: newTitle });
    },
});

var myTodo = new Todo(); 

myTodo.set('title', 'Check what\'s logged');
myTodo.setTitle('Go finising on Sunday.');
