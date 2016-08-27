(function(global, undefined) {
  var Rating = React.createClass({

    getInitialState: function() {
      return {
        rating: this.props.rating
      };
    },
    render: function() {

      var stars = this.props.rating / 100 * 5;
      var ratings = (Math.round(Math.floor(10 * stars) / 10 * 2) / 2).toFixed(1);
      var fullstars = parseInt(ratings);
      var fullstarsJSX = [];
      var halfstars = Math.round(parseFloat(ratings) % 1);
      var halfstarsJSX = [];

      for (var i=0; i < fullstars; i++) {
        fullstarsJSX.push(<span className='star-wrap'><span className='star full-star'></span></span>);
      }
      for (var i=0; i < halfstars; i++) {
        halfstarsJSX.push(<span className='star-wrap star-wrap-half'><span className='star half-star'></span></span>);
      }

      return (
        <div>
          <span className='rating-big'>{ratings}</span>
          {stars > 0 ? <div className='stars-container'>
            {fullstarsJSX}
            {halfstarsJSX}
          </div> : null}
        </div>
      );
    }

  });
  global.Components.Rating = Rating;
}(window));
