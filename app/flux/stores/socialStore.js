(function(global, undefined) {
  var WidgetApi = global.WidgetApi;
  var SocailStore = alt.createStore({
    displayName: 'SocailStore',

    bindListeners: {
      getSocailInformation: global.Actions.widgetDataLoaded,
    },

    state: {
      facebook: {},
      twitter: {},
      linkedin: {}
    },
    getSocailInformation: function (token) {
      var _this = this;
      WidgetApi.getUserInformation(token).then(function(data){
        _this.setState(updateState(_this.state, data.social_information));
      });
    }

  });
  global.SocailStore = SocailStore;
}(window));
