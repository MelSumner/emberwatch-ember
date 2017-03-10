import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  titleToken: 'Books about Ember.js',
  renderTemplate() {
    this.render('books', {
      into: 'application',
      outlet: 'content'
    });
  },

  model() {
    return this.store.findAll('book');
  }
});
