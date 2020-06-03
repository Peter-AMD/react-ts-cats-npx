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
  }, [breed]);

  useEffect(() => {
    setNoOfCats(cats.length);
    if (noOfCats === cats.length && cats.length !== 0) setSeeMore(false);
  }, [currentPage, cats]);
  const getMoreCats = () => {
    const nextPage = currentPage + 1;
    fetchCats(breed.id, nextPage);
    setCurrentPage(nextPage);
  };
  const onViewDetailsHandler = (cat: Cat) => {
    setCat(cat);
    history.push(`/${cat.id}`);
  };
  const renderCats: JSX.Element[] = cats.map((cat: Cat) => (
    <Card key={cat.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cat.url} />
      <Button
        style={{ position: 'absolute', bottom: '1px', width: '100%' }}
        variant="primary"
        onClick={() => onViewDetailsHandler(cat)}
      >
        View Details
      </Button>
    </Card>
  ));
  return (
    <React.Fragment>
      <div
        className="cats-list-wrapper"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        }}
      >
        {cats.length ? renderCats : ''}
      </div>
      {cats.length && seeMore ? (
        <Button
          style={{ margin: '30px auto', display: 'grid', width: '50%' }}
          variant="outline-dark"
          onClick={() => getMoreCats()}
        >
          See more
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
