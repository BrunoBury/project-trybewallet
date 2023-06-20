import { ADD_EXPENSE, FETCH_CURRENCIES_SUCCESS, DELETE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],

};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case 'SELECT_CURRENCY':
    return {
      ...state,
      selectCurrency: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses,
        { ...action.payload, exchangeRates: action.rates },
      ],
    };
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: action.expenses,
    };
  default:
    return state;
  }
};

export default wallet;
