import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import WalletForm from '../components/WalletForm';

describe('testando componente WalletForm', () => {
  it('exibe corretamente os campos de entrada', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const valueInput = screen.getByTestId('value-input');
    const descriptionInput = screen.getByTestId('description-input');
    const currencyInput = screen.getByTestId('currency-input');
    const methodInput = screen.getByTestId('method-input');
    const tagInput = screen.getByTestId('tag-input');

    expect(valueInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
  });
  it('chama a função handleInputChange ao digitar nos campos de entrada', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const valueInput = screen.getByTestId('value-input');
    const descriptionInput = screen.getByTestId('description-input');

    userEvent.type(valueInput, '100');
    userEvent.type(descriptionInput, 'Despesa de teste');

    expect(valueInput.value).toBe('100');
    expect(descriptionInput.value).toBe('Despesa de teste');
  });

  it('chama a função handleSubmit ao clicar no botão "Adicionar Despesa"', () => {
    renderWithRouterAndRedux(<WalletForm />);
    const addButton = screen.getByText('Adicionar Despesa');
    userEvent.click(addButton);
  });
});
