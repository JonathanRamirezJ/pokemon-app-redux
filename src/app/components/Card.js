import React, {Component, PropTypes} from 'react';

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '5%',
    boxShadow: '5px 5px 3px #ccc',
    borderRadius: '8px',
    margin: '5% 0'
  },
  btn: {
    width: '100%'
  }
};

class Card extends Component {
  render() {
    return (
      <div className="col-xs-12 col-md-4 col-sm-4">
        <div className="card-block" style={styles.card}>
          <img className="card-img-top" src={this.props.image} alt="Card image cap" style={styles.btn}/>
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <a href="" className="btn btn-primary text-center" style={styles.btn}>More infomation</a>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string
};

Card.defaultProps = {
  image: './app/media/pokeball.png'
};

export default(Card);
