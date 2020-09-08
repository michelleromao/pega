const initialState = {
  categories: [
    {
      id: 1,
      name: 'Geek',
    },
    {
      id: 2,
      name: 'Conforto',
    },
    {
      id: 3,
      name: 'Soninho',
    },
    {
      id: 4,
      name: 'Básico',
    },
    {
      id: 5,
      name: 'Punk',
    },
    {
      id: 6,
      name: 'Praia',
    },
  ],
};

function reducerCategories(state = initialState, action) {
  return state;
}

export default reducerCategories;
