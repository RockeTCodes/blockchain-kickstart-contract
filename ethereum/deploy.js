const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");
const provider = new HDWalletProvider("hope person horn nerve attend exchange congress raise eagle grape size during","https://goerli.infura.io/v3/65e209fc3ac3488fa1b2daf90798a0be")
const web3 = new Web3(provider);


// https://sepolia.infura.io/v3/3988ce8237ca4c1898f6e68b751e6de2
//https://goerli.infura.io/v3/65e209fc3ac3488fa1b2daf90798a0be

let accounts;

const deploy = async()=>{
  accounts = await new web3.eth.getAccounts();
  console.log("Deploying the contract pls wait....",accounts[0]);


try{
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({data:compiledFactory.bytecode})
  .send({from:accounts[0],gas:1000000});

console.log("The contract was succeffuly deployed at : " ,result.options.address);
provider.engine.stop();
}catch(err){
  console.log(err);
}



}

deploy();
