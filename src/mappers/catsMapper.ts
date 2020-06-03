import { Cat } from '../actions';

export const catsMapper = (data: string) => {
  const parsedData = JSON.parse(data);
  return parsedData.map(
    (cat: any): Cat => {
      const { id, url, height, width, breeds } = cat;

      const { name, origin, temperament, description } = breeds[0];
      return {
        id,
        url,
        height,
        width,
        name,
        origin,
        temperament,
        description,
      };
    }
  );
};

export const catMapper = (data: string) => {
  const parsedData = JSON.parse(data);
  const { id, url, height, width, breeds } = parsedData;
  const { name, origin, temperament, description } = breeds[0];

  return {
    id,
    url,
    height,
    width,
    name,
    origin,
    temperament,
    description,
  };
};
