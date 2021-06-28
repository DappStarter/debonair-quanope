require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remind concert gesture inflict swing slogan'; 
let testAccounts = [
"0x6064f2ff7a97a7753002bc1de9d76ddb3338f9d86927e2c649499796b359eb1a",
"0x12e522a8b553f454fefd39a4a743c56490358634fb1199241ba767616705804f",
"0xf8543376c7936f78a6765c0f3917a6b9f6e9f4aaa54ed351af30e892b9972e82",
"0x2450d66c33170789aec688acb8f6d46a0a27bd1bfdb0e52f144bb06226061fca",
"0x550de65051973216d354854d4482317cd5d137276c0d240b9ce30eddd5b3eb89",
"0xef3fbff9a7412a4e0fc8d63c91e02dba2c7ec29085a4b9d779d4679a3f4d8500",
"0x84f27d0bdb5a3495a7f88dff6db3cfc9b14880c028fc971e4f159ed9ef3a18b7",
"0xb59e7621d77fc48ff01b53ccdad2cc108fa6a2b71061a07a4585443157b37f6a",
"0xd849d7963e2804f2fdac21f5931e647d2e13109ea78a4b5cb3448c943689db8b",
"0xeae782139d80aa70b805f5cc9004f0d134c27483126611167240fd7ccf3617a8"
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
            gas: 3000000,
            gasPrice: 470000000000,
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


