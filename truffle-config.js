module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  //networks: {
  //  development: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  },
  //  test: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  }
  //}
  mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: "^0.6.12", // 版本号或约束字符串 - 如： "^0.5.0"
                         // 也可以指定为 "native" ，表示使用 native solc
      settings: {
        optimizer: {
          enabled: true,
          runs: 200   // 优化次数
        },
        evmVersion: "istanbul" // 默认: "byzantium"
      }
    }
  }
};
