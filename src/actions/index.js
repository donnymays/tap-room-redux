import * as c from './../actions/ActionTypes';

export const addKeg = (keg) => {
  const { name, brand, price, alcoholContent, pints, id } = keg;
  return {
    type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id
  }
};

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});