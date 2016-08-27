(function(global, undefined) {
  var Avatar = global.Components.Avatar;
  var UserStore = global.UserStore;
  var User = React.createClass({

    getInitialState: function() {
      return {
        user: UserStore.getState()
      };
    },
    componentWillMount: function() {
    },
    componentDidMount: function() {
      UserStore.listen(this.onChange);
    },
    componentWillUnmount: function() {
      UserStore.unlisten(this.onChange);
    },
    onChange: function () {
      this.setState({user: UserStore.getState()});
    },
    render: function() {
      return (
        <div>
          <div className='widget-avatar-container'>
            <Avatar url={this.state.user.profile_image_link}/>
            <span className='top-rated-symbol'></span>
            <span className='widget-avatar-rating'>
              <span className='percent'>{this.state.user.total_rating.toFixed(1)}%</span>
              <span className='feedback'>Positive</span>
            </span>
            <div className='widget-user-container'>
              <h1 className='widget-display-name'>{this.state.user.display_name}</h1>
              <span className='widget-display-rating'>{this.state.user.total_rating.toFixed(1)}% positive feedback</span>
            </div>
          </div>
        </div>
      );
    }

  });
  global.Components.User = User;
}(window));
