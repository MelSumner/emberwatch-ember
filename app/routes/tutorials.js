import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  titleToken: 'Tutorials about Ember.js',
  renderTemplate() {
    this.render('tutorials', {
      into: 'application',
      outlet: 'content'
    });
  },

  model() {
    return this.store.findAll('tutorial').then((result) => result.sortBy('date').toArray().reverse());
  }
});
