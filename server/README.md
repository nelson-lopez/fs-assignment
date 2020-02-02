## Instructions

1. Install dependencies using `npm install`
2. Start your server using `npm start`
3. To run test run `npm run test:watch`
4. The backend should be accessible via `http://localhost:3001/wallet` using __Postman__ or __Insomnia__
5. For a expired wallet address use `0x742d35Cc6634C0532925a3b844Bc454e4438f44e` and for non expired use `0x777DD061b3F9865a3aD9875EFca52e3906370e2d` or any of the public accounts on [etherscan](https://etherscan.io/accounts)

## Discussion

I used the following technologies: Nestjs, Web3, and Etherscan.
This app was generated using [Nest-CLI](https://github.com/nestjs/nest-cli).


## Requirements

#### An endpoint that returns true if the wallet is old. A wallet is considered old if the first transaction was performed at least one year ago

For this task I mapped the endpoint `http://localhost:3001/wallet/expired`. An example of using this endpoint would be to make a `POST` with JSON object in the following fashion: 

`"address": "0x777DD061b3F9865a3aD9875EFca52e3906370e2d"`


#### Get exchange rates from Euro and US Dollar to ETH (Ethereum), those can be stored in-memory / hardcoded (no need for a DB)

To access this endpoint simply make a `GET` request to `http://localhost:3001/wallet/exchange`

#### Edit the exchange rate of Euro or US Dollar to ETH
Make a `PATCH` request to `http://localhost:3001/wallet/exchange` with a JSON object containing exchange and value data ie. 

`"exchangeName": "USD",
	"value": 0.2`

#### An endpoint that gets a currency (Euro or US Dollar) and returns the balance of the ETH in the wallet in the selected currency using the exchange rates from step 2.

To access this endpoint make a `POST` request to `http://localhost:3001/wallet/balance` containing address and exchange data:

 `"address": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e","exchange":"USD"`
