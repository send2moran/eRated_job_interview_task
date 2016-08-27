(function(global, undefined) {
  var WidgetApi = global.WidgetApi;
  var ServicesStore = alt.createStore({
    displayName: 'ServicesStore',

    bindListeners: {
      getUserServices: global.Actions.widgetDataLoaded,
      switchService: global.Actions.switchService
    },

    state: {
      services: [],
      activeService: ''
    },
    switchService: function (service) {
      this.setState({activeService: service});
    },
    getUserServices: function (token) {
      var _this = this;
      WidgetApi.getUserInformation(token).then(function(data){
        _this.setState({services: data.services});
        global.Actions.loadUserReputation({token: token, selectedService: data.services[0].provider} );
        _this.switchService(data.services[0].service.provider);
      });
    }

  });
  global.ServicesStore = ServicesStore;
}(window));
