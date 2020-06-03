import { Breeds } from '../actions';

export const breedsMapper = (data: string) => {
  const parsedData = JSON.parse(data);
  return parsedData.map(
    (breed: any): Breeds => ({
      id: breed.id,
      name: breed.name,
    })
  );
};
