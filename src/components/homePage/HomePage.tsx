import React from 'react';
import { BreedDropdown } from '../breedDropdown/BreedDropdown';
import { BreedList } from '../breedList/BreedList';

interface Props {}

export const HomePage: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <h2 style={{ marginTop: '20px' }}>Cat Browser</h2>
      <BreedDropdown></BreedDropdown>
      <BreedList></BreedList>
    </React.Fragment>
  );
};
