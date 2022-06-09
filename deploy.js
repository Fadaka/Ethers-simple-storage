//synchronus [solidity]
//asychronus [javascript]

//sychronus - one step at a time code
//asychronus - can multitask at the same time

//Promise
//Pending
//Fulfilled
//Rejected

async function main() {
  console.log("hi");
  let variable = 5;
  console.log(variable);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
