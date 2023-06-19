import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('testando page Login', () => {
  const emailTestId = 'email-input';
  const passawordTestId = 'password-input';
  it('verifica se contém input com data-testid "email-input", input com data-testid "password-input"', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId(emailTestId);
    const passwordInput = screen.getByTestId(passawordTestId);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
  it('verifica se botão é desabilitado ao digitar email e senha', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId(emailTestId);
    const passwordInput = screen.getByTestId(passawordTestId);
    const submitButton = screen.getByText('Entrar');

    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, 'password');
    userEvent.click(submitButton);

    expect(submitButton).not.toBeDisabled();
  });
  it('verificação se é feito o redirecionamento para "/carteira"', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId(emailTestId);
    const passwordInput = screen.getByTestId(passawordTestId);
    const submitButton = screen.getByText('Entrar');

    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, 'password');
    userEvent.click(submitButton);

    expect(history.location.pathname).toBe('/carteira');
  });
});
