import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  titleToken: 'People of Ember.js community',
  renderTemplate() {
    this.render('people', {
      into: 'application',
      outlet: 'content'
    });
  },

  model() {
    return this.store.findAll('person');
  }
});
