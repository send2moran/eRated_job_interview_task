(function(global, undefined) {
  var ServicesStore = global.ServicesStore;
  var UserStore = global.UserStore;
  var ReputationStore = global.ReputationStore;
  var Rating = global.Components.Rating;
  var ServicePanel = React.createClass({

    getInitialState: function() {
      return {
        services: ServicesStore.getState().services,
        activeService: ServicesStore.getState().activeService
      };
    },
    componentWillMount: function() {
    },
    componentDidMount: function() {
      ServicesStore.listen(this.onChange);
    },
    componentWillUnmount: function() {
      ServicesStore.unlisten(this.onChange);
    },
    onChange: function () {
      this.setState({services: ServicesStore.getState().services, activeService: ServicesStore.getState().activeService});
    },
    render: function() {
      var activeServiceData = ReputationStore.getState().reputations.filter(function(i){return ServicesStore.getState().activeService === i.name});
      if(activeServiceData.length === 0) return (<div>-</div>);
      activeServiceData = activeServiceData.pop();
      return (
        <div className='box'>
          <div className='box-item'>
            <Rating rating={activeServiceData.score}/>
          </div>
          <div className='box-item'>
            <span className='transactions'>Number of Transactions made: {UserStore.getState().number_of_reviews}</span>
          </div>

          <div className='box-item characteristics-container'>
            <div>
              <span className='characteristics-label'>Item as described</span>
              <div className='characteristics-bar'><span className='characteristics-progress'>3/5</span></div>
            </div>
            <div>
              <span className='characteristics-label'>Communication</span>
              <div className='characteristics-bar'><span className='characteristics-progress' style={{width:'100%'}}>5/5</span></div>
            </div>
            <div>
              <span className='characteristics-label'>Delivery</span>
              <div className='characteristics-bar'><span className='characteristics-progress' style={{width:'30%'}}>2/5</span></div>
            </div>
          </div>

        </div>
      );
    }

  });
  global.Components.ServicePanel = ServicePanel;
}(window));
