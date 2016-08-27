(function(global, undefined) {
  var WidgetApi = global.WidgetApi;
  var UserStore = alt.createStore({
    displayName: 'UserStore',

    bindListeners: {
      getUser: global.Actions.loadUser,
    },

    state: {
      display_name: '',
      first_name: '',
      last_name: '',
      location: '',
      number_of_ratings: 0,
      number_of_reviews: 0,
      profile_image_link: '',
      total_rating: 0
    },

    pubilcMethods: {
      hasFood: function () {
        return !!this.getState();
      }
    },
    getUser: function (token) {
      var _this = this;
      WidgetApi.getUserInformation(token).then(function(data){
        _this.setState(updateState(_this.state, data));
        global.Actions.widgetDataLoaded(token);
      }).catch(function(){
        _this.setState({error: true});
        global.Actions.widgetDataError();
      });
    }

  });
  global.UserStore = UserStore;
}(window));
