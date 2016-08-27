(function(global, undefined) {
  var WidgetApi = global.WidgetApi;
  var ReputationStore = alt.createStore({
    displayName: 'ReputationStore',

    bindListeners: {
      getUserReputation: global.Actions.loadUserReputation
    },

    state: {
      reputations: [],
    },

    getUserReputation: function (context) {
      var token = context.token;
      var selectedService = context.selectedService;
      var _this = this;
      WidgetApi.getUserInformation(token).then(function(data){
        _this.setState({reputations: data.relevant_reputation});
      });
    }


  });
  global.ReputationStore = ReputationStore;
}(window));
