(function(global, undefined) {

  var Avatar = React.createClass({

    render: function() {
      return (
        <div className='avatar-wrap'>
            <img className='avatar-img' src={this.props.url}/>
        </div>
        );
    }

  });
  global.Components.Avatar = Avatar;
}(window));
