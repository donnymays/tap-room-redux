import * as actions from './../../actions';

describe('keg list actions', () => {

  const kegData = {
    name: "Name",
    brand: "BRAND",
    price: 7.5,
    alcoholContent: 5.5,
    pints: 124,
    id: 1
  }

  test('addKeg should create ADD_KEG action', () => {
    const { name, brand, price, alcoholContent, pints, id } = kegData;
    expect(actions.addKeg(kegData)).toEqual({
        type: 'ADD_KEG',
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id
      });
  });

  test('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  test('selectedKeg should create SELECT_KEG action', () => {
    const { name, brand, price, alcoholContent, pints, id } = kegData;
    expect(actions.selectedKeg(kegData)).toEqual({
      type: 'SELECT_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id
    });
  });

});