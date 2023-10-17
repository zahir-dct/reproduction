import contractAbi from "./contractAbi";
import { default as Web3 } from "web3";

export const getBalance = async () => {
	const contractAddress = "0x2...587";

	const jnxWallet = "0xc...a04";
	const provider = "https://data-seed-prebsc-1-s1.binance.org:8545";
	const web3 = new Web3(new Web3.providers.HttpProvider(provider));
	let contract = new web3.eth.Contract(contractAbi, contractAddress);

	try {
		const balance = await contract.methods.balanceOf(jnxWallet).call();
		return Promise.resolve(balance / 1e18);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const validatejanexWalletAddress = async (address) => {
	try {
		const addressCheck = await Web3.utils.toChecksumAddress(address);
		const isValid = await Web3.utils.isAddress(addressCheck);

		return isValid;
	} catch (error) {
		return false;
	}
};
