import Component from "flarum/Component";
import Button from "flarum/components/Button";

import {
  web3Accounts,
  web3Enable,
  isWeb3Injected,
} from "@polkadot/extension-dapp";

export default class Web3Button extends Component {
  view() {
    return (
      <Button className="Button" onclick={this.handleClick.bind(this)}>
        Connect Web3
      </Button>
    );
  }

  async handleClick(e) {
    await web3Enable("Flarum Web3 Address Extension");
    if (isWeb3Injected) {
      const accounts = await web3Accounts();
      console.log("Accounts from Button");
      console.log(accounts);
      this.attrs.accounts = accounts;
    } else {
      window.location = "https://github.com/polkadot-js/extension";
    }
  }
}
