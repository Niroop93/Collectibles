const TestToken = artifacts.require("TestToken");

contract("TestToken", accounts =>{
	let instance;
	it("Mint First token", async() => {
		instance = await TestToken.deployed();
		let owner = await instance.owner();
		assert.equal(owner, accounts[0], "");

		let tokenUri = "test.com/1";
		let mintResult = await instance.mintTo(accounts[0], tokenUri);

		let totalSupply = await instance.totalSupply.call();
		assert.equal(1, totalSupply.valueOf(), "Total supply is 1");

		let tokens = await instance.tokensOf(accounts[0]);
		assert.equals(tokens[0], 0, "Token ID of first token should be 0");
	});
});