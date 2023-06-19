import React, { Component } from 'react';
import '../styles/Table.css';

class Table extends Component {
  render() {
    return (
      <div>
        <h2>Gastos</h2>
        <table className="custom-headers">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Table;
