require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net pudding give kitten sun tornado'; 
let testAccounts = [
"0xe01e41a95bd4a9043836525c6f2970a38913cd843afed56d4c6702113102bdbd",
"0xf3f85e4e6cb851eba755e572ef685de1628be9fd07e2ef5bc48f1847861d4016",
"0x80be49a0f843bc7b0b790e06d2e53b6c574800ed6605ca17a261aaaa292ee27b",
"0x0f44d1b0c84d4c9aafb68d279547b48ca9c0b683856930d9a3ddf3b0ab4d2c71",
"0x646e9f9f8c8afd2371aee57ce96c9a6f91cef94530bec5f5a8815fd387bc6b7a",
"0x06d935943071719df8357dd2d7b2cf3d673abe0fd64d3320ae096689db61a1d6",
"0xd9fc1fbbe44b14a3b55385e609a9ceb9fedf1e9ee9a565ad18044aa84ae4761c",
"0x1a855d3ed1791f1999ba586183aa4c74105fcda26f17c0445bd2a94860f7be95",
"0xa278c654b9f4cad00b9281017575584ff5b5005cf4ebd670f985b89ea622ebe6",
"0xcbbd517e88e123faf7b8d5c7392f1f501fead3ffe1e44fe3e97629125d041f87"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


