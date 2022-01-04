const chai = require("chai")
const path = require("path")
const { wasm: wasm_tester } = require("circom_tester")
const { buildMimc7, buildMimcSponge } = require("circomlibjs")
const { BigNumber: BN } = require('ethers')


describe("Battleship Circuit Test", () => {
    it("Mimc sponge check", async () => {
        // secret value I wish to prove I can use to generate hash
        const secret = "19161395867226193"
        const inp = BN.from(secret).toBigInt()
        // hash secret value
        const sponge = await buildMimcSponge()
        const hash = await sponge.multiHash([inp])
        console.log(`Secret: ${secret}`)
        console.log(`hash (BigInt): ${BN.from(hash).toBigInt()}`)
        console.log(`hash (Hex): 0x${toHexString(hash)}`)
        // generate witness and prove
        const circuit = await wasm_tester(path.resolve(__dirname, "../circuits/mimc.circom"))
        const witness = await circuit.calculateWitness({ inp, expected: BN.from(hash).toBigInt() })
        await circuit.assertOut(witness, { out: sponge.F.toObject(hash) })
    })
})

const toHexString = (bytes) => {
    return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
}
