import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

class Information extends Component {
  render() {
    return (
      <Grid>
        <h1 className="text-center">Information Single Pokemon</h1>
        <Row>
          <Col xs={12} md={4} sm={4}>
            <img className="text-center" src={this.props.image} alt="Card image cap"/>
          </Col>
          <Col xs={12} md={8} sm={8}>
            <h2 className="text-center">{this.props.name}</h2>
            <ListGroup>
              <ListGroupItem>No. Pokedex: </ListGroupItem>
              <ListGroupItem>Height: </ListGroupItem>
              <ListGroupItem>Witdh: </ListGroupItem>
              <ListGroupItem>Types: </ListGroupItem>
              <ListGroupItem>Abilities: </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Information.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string
};

Information.defaultProps = {
  name: 'Pokemon Name',
  image: './app/media/pokeball.png'
};
export default(Information);
