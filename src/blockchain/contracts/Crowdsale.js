
import Contract from './Contract';
import abi from '../abis/crowdsale.json';
import { addresses } from '../constants';

class Crowdsale extends Contract {
  constructor(web3) {
    super(web3, "crowdsale");
    this.contract = new this.web3.eth.Contract(abi, addresses.crowdsale);
  }
}

export default Market;