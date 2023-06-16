import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import '../styles/Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-container">
        <div className="header-form-container">
          <Header />
          <div className="form-container">
            <WalletForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Wallet;
