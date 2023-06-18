export const USER_EMAIL = 'USER_EMAIL';
export const FETCH_CURRENCIES_BEGIN = 'FETCH_CURRENCIES_BEGIN';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
export const FETCH_CURRENCIES_FAILURE = 'FETCH_CURRENCIES_FAILURE';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const login = (email) => ({
  type: USER_EMAIL,
  payload: email,
});

export const addExpenseAction = (expense, rates) => ({
  type: ADD_EXPENSE,
  payload: expense,
  rates,
});

export const fetchCurrenciesBegin = () => ({
  type: FETCH_CURRENCIES_BEGIN,
});

export const fetchCurrenciesSuccess = (currencies) => ({
  type: FETCH_CURRENCIES_SUCCESS,
  payload: currencies,
});

export const fetchCurrenciesFailure = (error) => ({
  type: FETCH_CURRENCIES_FAILURE,
  payload: error,
});

export function thunkFetchCurrencies() {
  return async (dispatch) => {
    try {
      dispatch(fetchCurrenciesBegin());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const currencies = Object.keys(data).filter((key) => key !== 'USDT');
      dispatch(fetchCurrenciesSuccess(currencies));
    } catch (error) {
      dispatch(fetchCurrenciesFailure(error));
    }
  };
}

export const fetchAddExpenses = (state) => (
  async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const result = await response.json();
      dispatch(addExpenseAction(state, result));
    } catch (error) {
      console.log(error);
    }
  }
);
