(function(global, undefined) {
  var Actions = global.alt.createActions({
    switchService: function (service) {
      this.dispatch(service);
    },
    serviceChanged: function () {
      this.dispatch();
    },
    switchPage: function (pageIndex) {
      this.dispatch(pageIndex);
    },
    loadUser: function (token) {
      this.dispatch(token);
    },
    widgetDataLoaded: function (token) {
      this.dispatch(token);
    },
    loadUserReputation: function (context) {
      this.dispatch(context);
    },
    widgetDataError: function () {
      this.dispatch();
    }
  });
  global.Actions = Actions;
}(window));
