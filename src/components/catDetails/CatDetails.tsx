import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Cat, getCat } from '../../actions';
import { StoreState } from '../../reducers';
import { connect } from 'react-redux';

interface Props {
  cat: Cat;
  match: any;
  getCat(id: string): void;
}
const _CatDetails: React.FC<Props> = ({ cat, match, getCat }) => {
  let history = useHistory();

  useEffect(() => {
    getCat(match.params.catId);
  }, [getCat, match.params.catId]);

  return (
    <div style={{ marginTop: '20px' }}>
      <Card key={cat.id} style={{ width: '72rem', margin: '0 auto' }}>
        <Button
          style={{ width: '6rem', margin: '20px' }}
          variant="primary"
          onClick={() => history.push('/')}
        >
          Back
        </Button>
        <Card.Img variant="top" src={cat.url} />
        <Card.Body>
          <Card.Title>{cat.name}</Card.Title>
          <Card.Subtitle style={{ marginBottom: '20px' }}>
            Origin: {cat.origin}
          </Card.Subtitle>
          <Card.Subtitle style={{ marginBottom: '10px' }}>
            Temperament: {cat.temperament}
          </Card.Subtitle>
          <Card.Text>{cat.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = ({ cat }: StoreState): { cat: Cat } => {
  return { cat };
};

export const CatDetails = connect(mapStateToProps, { getCat })(_CatDetails);
