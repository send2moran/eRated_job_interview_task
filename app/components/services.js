(function(global, undefined) {
  var ServicesStore = global.ServicesStore;
  var ReputationStore = global.ReputationStore;
  var Services = React.createClass({

    getInitialState: function() {
      return {
        services: ServicesStore.getState().services
      };
    },
    componentWillMount: function() {},
    componentDidMount: function() {
      ServicesStore.listen(this.onChange);
    },
    componentDidUpdate: function () {
    },
    componentWillUnmount: function() {
      ServicesStore.unlisten(this.onChange);
    },
    onChange: function() {
      this.setState({
        services: ServicesStore.getState().services.filter(function(item) {
          return item.service.provider === 'ebay' || item.service.provider === 'etsy';
        })
      });
      if(ServicesStore.getState().activeService === ''){
        global.setTimeout(function(){
          this.onServiceTabClick(this.state.services[0].service.provider);
        }.bind(this),0);
      }
    },
    onServiceTabClick: function(service, event) {
      var element = this.refs[service].getDOMNode()
      var tabs = Array.prototype.slice.call(element.parentNode.childNodes);
      tabs.forEach(function(tab){
        tab.classList.remove('active');
      });
      element.classList.add('active');
      global.Actions.switchService(service);
    },
    render: function() {
      return (
        <div className='box box-row tabs-container'>
          {this.state.services.map(function(item) {
          return <div ref={item.service.provider} className='box-item box-item-small tabs-container-tab' key={item.service.provider}>
              <div className={'tabs-container-tab-content tab-' + item.service.provider} onClick={this.onServiceTabClick.bind(this, item.service.provider)}>
                {item.service.provider}
              </div>
            </div>
          }.bind(this))}
        </div>
        );
    }

  });
  global.Components.Services = Services;
}(window));
