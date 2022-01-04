# circomHashes

## Install & run
1. `git clone https://github.com/jp4g/circomHashes.git && cd circomHashes && yarn`
2. `yarn test`

## Issue scope
 * Secret BigInt: `19161395867226193`
 * Circomlib MiMC7 Sponge Hash Output: `21731733786473486788053455829586899794818110208513063447752477998092164094938`
 * Circomlibjs MiMC7 Sponge Hash Output: `49931793134749019674205421580384475216470244562534267104157347019332121755690`
Have used to get this far:
 * [The MiMC7 Spec](https://eprint.iacr.org/2016/492.pdf)
 * Circomlib sponge [implementation](https://github.com/iden3/circomlib/blob/master/circuits/mimcsponge.circom), [test](https://github.com/iden3/circomlib/blob/master/test/mimcspongecircuit.js), and js sponge [implementation](https://github.com/iden3/circomlibjs/blob/main/src/mimcsponge.js) and [test](https://github.com/iden3/circomlibjs/blob/main/test/mimcspongecontract.js)
 * Dark Forest and [Tornado Cash](https://github.com/tornadocash/tornado-core/blob/master/circuits/merkleTree.circom) implementations of [MiMC7 Hash](https://github.com/darkforest-eth/darkforest-v0.3/blob/master/circuits/init/circuit.circom)

## Soooo
Why are my hashes different? How can I achieve the correct format? It seems like the params for mimc sponge is `(input, rounds, output)` so for a single input output hash I don't understand what is wrong :/
