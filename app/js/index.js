(function(global, undefined) {
  var appContainerElement = document.getElementById('app-container');
  var AppContainer = global.AppContainer
  var userToken = qs('user');
  React.render(<AppContainer token={userToken}/>, appContainerElement);
}(window));
