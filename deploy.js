const ethers = require("ethers");
const fs = require("fs-extra");
//synchronus [solidity]
//asychronus [javascript]

//sychronus - one step at a time code
//asychronus - can multitask at the same time

//Promise
//Pending
//Fulfilled
//Rejected

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "HTTP://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "cd602cd7d69ef94877ba54f6bd97e6c56357d56680cd0154932fab04e86ccd44",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying Contract, please wait ...");
  const contract = await contractFactory.deploy();
  //can only use await key word in async function , telling code to stop here till contract deployed (requirements fulfilled)
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
