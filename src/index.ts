import Web3 from "web3";
import { EVM } from "dequanto/src/evm/EVM";

const provider =
  "https://eth-mainnet.g.alchemy.com/v2/kaP73g41gnaTbv615EkSN5Q8ZHNFTDSj";

// cryptokitties
const contractAddress = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d";

const web3 = new Web3(provider);

async function run() {
  try {
    const bytecode = await web3.eth.getCode(contractAddress);
    const evm = new EVM(bytecode);
    const abi = evm.getAbi();

    console.log("\n Why you no working????", abi);
  } catch (error) {
    console.error("\n Error:", error);
  }
}

run();
