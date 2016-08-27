(function(global, undefined) {
  var ReputationStore = global.ReputationStore;
  var ServicesStore = global.ServicesStore;
  var Reputation = React.createClass({

    getInitialState: function() {
      return {
        reputation: ReputationStore.getState().reputations,
        activeService: ServicesStore.getState().activeService
      };
    },
    componentWillMount: function() {},
    componentDidMount: function() {
      ReputationStore.listen(this.onChange);
      ServicesStore.listen(this.onChange);
    },
    componentWillUnmount: function() {
      ReputationStore.unlisten(this.onChange);
      ServicesStore.unlisten(this.onChange);
    },
    onChange: function() {
      this.setState({
        reputation: ReputationStore.getState().reputations,
        activeService: ServicesStore.getState().activeService
      });
    },
    render: function() {

      var activeServiceData = this.state.reputation.filter(function(rep) {
        return this.state.activeService === rep.name
      }.bind(this));
      if(activeServiceData.length === 0) return (<div className='no-data'>No Reviews Yet</div>);
      activeServiceData = activeServiceData.pop();
      var reviews = activeServiceData.reviews.slice(0,3);
      return (
        <div className='box reputation-container'>
          <h3><em className='title'>Reviews</em> ({activeServiceData.total_reviews}+)</h3>
          <div className='reputation-reviews-container'>
          {reviews.map(function(reputation) {
            return (
              <div className='box-item box-item-small reputation-item'>
                <div className='reputation-item-review-type'>{reputation.review_type === 'positive' ? '+' : ''}</div>
                <div className='reputation-item-content'>{reputation.review_content}</div>
              </div>
            )
          })}
          </div>
        </div>
        );
    }

  });
  global.Components.Reputation = Reputation;
}(window));
