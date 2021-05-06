import { UseWalletProvider } from 'use-wallet';

import "../scss/App.scss";
import Route from "../route/index";

import WalletProvider from '../contexts/WalletProvider';
import * as utils from '../blockchain/utils';

function App() {
  return (
    <Providers>
      <Route />
    </Providers>
  );
}

const Providers = ({ children }) => {

  const {
    chainId,
    rpcUrl
  } = utils.getEthChainInfo();

  return (
    <UseWalletProvider
      chainId={chainId}
      connectors={{
        walletconnect: { rpcUrl }
      }}
    >
      <WalletProvider>
        {children}
      </WalletProvider>
    </UseWalletProvider>
  )
}

export default App;
