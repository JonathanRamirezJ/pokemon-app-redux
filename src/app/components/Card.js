import React, {Component, PropTypes} from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card col-xs-12 col-md-3 col-sm-3">
        <div className="card-block">
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <a href="" className="btn btn-primary text-center">Go</a>
        </div>
      </div>
    );
  }
}
Card.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

export default (Card);
