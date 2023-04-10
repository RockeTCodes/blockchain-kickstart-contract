const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");
const provider = new HDWalletProvider("<YOUR_PNEUMONIC>","<YOUR_NODE_URL>")
const web3 = new Web3(provider);




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
