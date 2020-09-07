const initialState = {
  user: [
    {
      id: 'p1',
      username: 'pegaoficial',
      name: 'Pega!',
      email: 'pegaoficial@gmail.com',
      cpf: '00000000000',
      tel: 8800000000000,
      password: 'pegaOFICIALpegando!',
      interestCategories: [1, 2],
      picpay: '@pegaoficial',
      address: [
        {
          cep: 63900221,
          street: 'Rua José de Queiroz Pessoa',
          number: '16**',
          neighboohood: 'Centro',
          city: 'Quixadá',
          state: 'Ceará',
          principal: true,
        },
      ],
      announcements: [],
      favorite: [],
      buys: [],
      sales: [],
      sacola: {
        productsID: [],
        resume: {
          productsValue: 0,
          cupom: 0,
          total: 0,
        },
      },
    },
  ],
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

function reducerRaiz(state = initialState, action) {
  return state;
}

export default reducerRaiz;
