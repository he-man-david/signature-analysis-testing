"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
const EVM_1 = require("@dequanto/evm/EVM");
const provider = "https://eth-mainnet.g.alchemy.com/v2/kaP73g41gnaTbv615EkSN5Q8ZHNFTDSj";
// cryptokitties
const contractAddress = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d";
const web3 = new web3_1.default(provider);
async function run() {
    try {
        const bytecode = await web3.eth.getCode(contractAddress);
        const evm = new EVM_1.EVM(bytecode);
        const abi = evm.getAbi();
        console.log("\n Why you no working????", abi);
    }
    catch (error) {
        console.error("\n Error:", error);
    }
}
run();
