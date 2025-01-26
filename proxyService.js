const xrpl = require('xrpl');

let proxyPool = [];

// Initialize Proxy Pool
function initializeProxyPool(size) {
  for (let i = 0; i < size; i++) {
    const wallet = xrpl.Wallet.generate();
    proxyPool.push(wallet.classicAddress);
  }
}

// Get Random Proxies
function getRandomProxies(count) {
  const proxies = [];
  for (let i = 0; i < count; i++) {
    const randomProxy = proxyPool[Math.floor(Math.random() * proxyPool.length)];
    proxies.push(randomProxy);
  }
  return proxies;
}

module.exports = {
  initializeProxyPool,
  getRandomProxies,
};
