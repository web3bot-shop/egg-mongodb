# egg-mongodb

<!--
egg use mongodb
-->

## Install

```bash
$ npm i @web3bot/egg-mongodb --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.mongodb = {
  enable: true,
  package: "@web3bot/egg-mongodb",
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.mongodb = {
  client: {
    url: "mongodb://<user>:<password>@<ip>:<port>/?authSource=<DBName>",
    dbName: "",
    options: {},
  },
};
// Replica Set
exports.mongodb = {
  client: {
    url: "mongodb://<user>:<password>@<ip>:<port>,<ip2>:<port2>,<ip3>:<port3>/?authSource=<DBName>",
    dbName: "",
    options: {},
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
async test() {
  const collection = this.app.mongodb.collection('test');
  const result = await collection.find({ });
  console.log(result);
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/web3bot-shop/egg-mongodb/issues).

## License

[MIT](LICENSE)
