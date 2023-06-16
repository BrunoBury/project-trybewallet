const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  selectCurrency: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'FETCH_CURRENCIES_SUCCESS':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'SELECT_CURRENCY':
    return {
      ...state,
      selectCurrency: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
