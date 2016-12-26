import Ember from 'ember';

export default Ember.Component.extend({
  query: '',
  message: '',

  actions: {
    example(){
      this.set('query', 'an example value');
    },
    search(){
      const query = this.get('query');
      this.set('message', `Searching for ${query}`);
    }
  }
});
