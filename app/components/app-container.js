(function(global, undefined) {

  var Social = global.Components.Social;
  var Services = global.Components.Services;
  var ServicePanel = global.Components.ServicePanel;
  var Reputation = global.Components.Reputation;
  var User = global.Components.User;

  var UserStore = global.UserStore;

  var AppContainer = React.createClass({

    getInitialState: function() {
      return {
        loading: true
      };
    },
    componentWillMount: function() {
      global.Actions.loadUser(this.props.token);
    },
    componentDidMount: function() {
      UserStore.listen(this.onChange);
    },
    componentWillUnmount: function() {
      UserStore.unlisten(this.onChange);
    },
    onChange: function () {
      this.setState({loading: false});
      this.setState({user: UserStore.getState()});
    },
    render: function() {
      return (
        <div className='box erated-widget-app-container'>
          <header><div className='erated-logo'></div></header>
          <div className='box box-row widget'>
          {this.state.loading ? <span className='box-item loading'>
              <object class="er-loading-img" type="image/svg+xml" data="//erated-widget.s3.amazonaws.com/images/puff.svg?color=#F5AF02"></object>
              <em>Loading eRated...</em>
            </span> :
          UserStore.getState().error ?
              <div>Data Error</div>
             :
               [
                <div className='box-item box-item-medium'>
                  <User/>
                  <Social/>
                </div>,
                <div className='box-item box-item-medium'>
                  <Services/>
                  <div className='panel-content-container'>
                    <ServicePanel/>
                  </div>
                </div>,
                <div className='box-item box-item-medium'>
                  <Reputation/>
                </div>
              ]
          }

          </div>
        </div>
      );
    }

  });
  global.AppContainer = AppContainer;
}(window));
