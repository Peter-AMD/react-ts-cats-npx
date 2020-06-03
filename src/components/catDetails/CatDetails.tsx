import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Cat } from '../../actions';
import { StoreState } from '../../reducers';
import { connect } from 'react-redux';

interface Props {
  cat: Cat;
}
const _CatDetails: React.FC<Props> = ({ cat }) => {
  let history = useHistory();

  return (
    <div>
      {console.log(cat)}
      <Card key={cat.id} style={{ width: '18rem', margin: '0 auto' }}>
        <Button variant="primary" onClick={() => history.push('/')}>
          Back
        </Button>
        <Card.Img variant="top" src={cat.url} />
        <Card.Body>
          <Card.Title>{cat.name}</Card.Title>
          <Card.Subtitle>Origin: {cat.origin}</Card.Subtitle>
          <Card.Subtitle>Temperament: {cat.temperament}</Card.Subtitle>
          <Card.Text>{cat.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = ({ cat }: StoreState): { cat: Cat } => {
  return { cat };
};

export const CatDetails = connect(mapStateToProps)(_CatDetails);
