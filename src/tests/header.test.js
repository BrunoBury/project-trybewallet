import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Header from '../components/Header';

describe('testando componente Header', () => {
  it('Teste se o email está sendo renderizado', () => {
    const initialEntries = ['/carteira'];
    renderWithRouterAndRedux(<App />, { initialEntries });
    const email = screen.getByTestId('email-field');
    expect(email).toBeInTheDocument();
  });

  it('Teste se o total de gastos é renderizado', () => {
    const initialEntries = ['/carteira'];
    renderWithRouterAndRedux(<App />, { initialEntries });
    const total = screen.getByTestId('total-field');
    expect(total).toBeInTheDocument();
  });

  it('Teste se o título está sendo renderizado', () => {
    const initialEntries = ['/carteira'];
    renderWithRouterAndRedux(<App />, { initialEntries });
    const title = screen.getByText('TrybeWallet');
    expect(title).toBeInTheDocument();
  });

  it('Teste se a moeda está sendo renderizada corretamente', () => {
    const initialEntries = ['/carteira'];
    renderWithRouterAndRedux(<App />, { initialEntries });
    const currency = screen.getByTestId('header-currency-field');
    expect(currency).toHaveTextContent('BRL');
  });

  it('Teste do cálculo do total de gastos', async () => {
    const expenses = [
      {
        value: 10,
        currency: 'USD',
        exchangeRates: { USD: { ask: 5 } },
      },
      {
        value: 20,
        currency: 'EUR',
        exchangeRates: { EUR: { ask: 6 } },
      },
    ];
    const initialState = {
      user: { email: 'test@example.com' },
      wallet: { expenses },
    };

    renderWithRouterAndRedux(<Header />, { initialState });

    const total = await screen.findByTestId('total-field');
    expect(total).toHaveTextContent('170.00');
  });
});
