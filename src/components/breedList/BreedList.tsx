import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

import { StoreState } from '../../reducers';
import { fetchCats, Cat, setCat, Breeds } from '../../actions';

interface Props {
  breed: Breeds;
  cats: any;
  setCat(cat: Cat): void;
  fetchCats(breed: string, page: number): any;
}

export const _BreedList: React.FC<Props> = ({
  breed,
  cats,
  fetchCats,
  setCat,
}) => {
  let history = useHistory();
  let [currentPage, setCurrentPage] = useState(1);
  const [noOfCats, setNoOfCats] = useState(0);
  const [seeMore, setSeeMore] = useState(true);

  useEffect(() => {
    setCurrentPage(1);
    setSeeMore(true);
    if (breed) fetchCats(breed.id, 1);
  }, [breed, fetchCats]);

  useEffect(() => {
    if (noOfCats === cats.length && cats.length !== 0) setSeeMore(false);
  }, [currentPage, cats, noOfCats]);
  const getMoreCats = () => {
    const nextPage = currentPage + 1;
    fetchCats(breed.id, nextPage);
    setCurrentPage(nextPage);
    setNoOfCats(cats.length);
  };
  const onViewDetailsHandler = (cat: Cat) => {
    setCat(cat);
    history.push(`/${cat.id}`);
  };
  const renderCats: JSX.Element[] = cats.map((cat: Cat) => (
    <Card key={cat.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cat.url} />
      <div style={{ height: '78px' }}>
        <Button
          style={{
            position: 'absolute',
            bottom: '1px',
            width: '80%',
            margin: '20px',
          }}
          variant="primary"
          onClick={() => onViewDetailsHandler(cat)}
        >
          View Details
        </Button>
      </div>
    </Card>
  ));
  return (
    <React.Fragment>
      <div
        className="cats-list-wrapper"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gridColumnGap: '30px',
          gridRowGap: '90px',
        }}
      >
        {cats.length ? renderCats : ''}
      </div>
      {cats.length && seeMore ? (
        <Button
          style={{ marginTop: '20px' }}
          variant="success"
          onClick={() => getMoreCats()}
        >
          Load more
        </Button>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

const mapStateToProps = ({ breed, cats }: StoreState) => {
  return { breed, cats };
};

export const BreedList = connect(mapStateToProps, { fetchCats, setCat })(
  _BreedList
);
