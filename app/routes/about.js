import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      title: "Ember lessons",
      total: 10
    };
  }
});
