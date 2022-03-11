const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0xcB0Ab5FC9187B00e0389cE2Ec3ceD0eb315d88b7";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    const upgraded = await upgrades.upgradeProxy(proxyAddress, BoxV2);
    console.log((await upgraded.area()).toString());
    console.log((await upgraded.perimeter()).toString());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });