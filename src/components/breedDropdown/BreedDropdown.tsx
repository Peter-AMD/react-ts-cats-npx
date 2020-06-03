import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { StoreState } from '../../reducers';
import { Breeds, fetchBreeds, selectBreed, clearCats } from '../../actions';
import './styles.scss';

interface Props {
  breeds: Breeds[];
  breed: Breeds;
  fetchBreeds(): any;
  selectBreed(breed: Breeds): any;
  clearCats(): void;
}

const _BreedDropdown: React.FC<Props> = ({
  breeds,
  breed,
  fetchBreeds,
  selectBreed,
  clearCats,
}) => {
  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  const onClickhandler = (breed: Breeds) => {
    selectBreed(breed);
    clearCats();
  };

  const renderItem: JSX.Element[] = breeds.map((breed) => (
    <Dropdown.Item onClick={() => onClickhandler(breed)} key={breed.id}>
      {breed.name}
    </Dropdown.Item>
  ));

  const renderLoader = <Spinner animation="grow" />;

  return (
    <React.Fragment>
      <h3>Breed dropdown</h3>
      <div className="breed-dropdown-wrapper">
        <DropdownButton id="breed-list" title={breed.name || 'Select Breed'}>
          {breeds.length ? renderItem : renderLoader}
        </DropdownButton>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({
  breeds,
  breed,
}: StoreState): { breeds: Breeds[]; breed: Breeds } => {
  return { breeds, breed };
};

export const BreedDropdown = connect(mapStateToProps, {
  fetchBreeds,
  selectBreed,
  clearCats,
})(_BreedDropdown);
