import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  titleToken: 'Talks about Ember.js',
  renderTemplate() {
    this.render('talks', {
      into: 'application',
      outlet: 'content'
    });
  },

  model() {
    return this.store.findAll('talk').then((result) => result.sortBy('date').toArray().reverse());
  }
});
