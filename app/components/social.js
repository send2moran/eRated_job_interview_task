(function(global, undefined) {
  var SocailStore = global.SocailStore;
  var Social = React.createClass({

    getInitialState: function() {
      return {
        social: SocailStore.getState()
      };
    },
    componentWillMount: function() {
    },
    componentDidMount: function() {
      SocailStore.listen(this.onChange);
    },
    componentWillUnmount: function() {
      SocailStore.unlisten(this.onChange);
    },
    onChange: function () {
      this.setState({social: SocailStore.getState()});
    },
    render: function() {
      return (
          <div className='box box-row widget-social-details'>
            <div className='box-item box-item-small'>
              <span className='widget-social-icon fb-icon'></span>
              <p>{this.state.social.facebook.connections ? this.state.social.facebook.connections : '-'}</p>
              <span>Friends</span>
            </div>
            <div className='box-item box-item-border'>
              <span className='border'></span>
            </div>
            <div className='box-item box-item-small'>
              <span className='widget-social-icon lnki-icon'></span>
              <p>{this.state.social.linkedin.connections  ? this.state.social.linkedin.connections : '-'}</p>
              <span>Connections</span>
            </div>
            <div className='box-item box-item-border'>
              <span className='border'></span>
            </div>
            <div className='box-item box-item-small'>
              <span className='widget-social-icon twt-icon'></span>
              <p>{this.state.social.twitter.connections ? this.state.social.twitter.connections : '-'}</p>
              <span>Followers</span>
            </div>
          </div>
      );
    }

  });
  global.Components.Social = Social;
}(window));
