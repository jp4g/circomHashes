pragma circom 2.0.2;

include "../node_modules/circomlib/circuits/mimcsponge.circom";

template MiMCTest() {
    signal input inp; // value to hash
    signal input expected; // expected value of hash
    signal output out; // hash of value

    component hash = MiMCSponge(1, 220, 1);

    hash.ins[0] <== inp;
    hash.k <== 0;
    log(777);
    log(hash.outs[0]);
    log(expected);
    log(777);
    assert(hash.outs[0] == expected);
    out <== hash.outs[0];
}

component main = MiMCTest();