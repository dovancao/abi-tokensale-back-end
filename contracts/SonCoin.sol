pragma solidity 0.4.24;
import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract SonCoin is MintableToken {
  string public name = 'SONSEXY COIN';
  string public symbol = 'SSXY';
  uint8 public decimals = 18;
}
