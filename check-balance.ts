// 데브넷에서 밸런스 가져오기
// EDPUf3gii2ifPGDRHGvtJPXSshuEcnVQSpoBazCCxUev
// import "dotenv/config";
// import { getKeypairFromEnvironment } from "@solana-developers/helpers";
// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
 
// const myKeypair = getKeypairFromEnvironment("SECRET_KEY"); 

// const publicKey = myKeypair.publicKey
 
// const connection = new Connection("https://api.devnet.solana.com", "confirmed");
 
// const balanceInLamports = await connection.getBalance(publicKey);
 
// const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
 
// console.log(
//   `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
// );



// 다른 학생의 잔액 확인하기
// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
 
// const suppliedPublicKey = process.argv[2];
// if (!suppliedPublicKey) {
//   throw new Error("Provide a public key to check the balance of!");
// }
 
// const connection = new Connection("https://api.devnet.solana.com", "confirmed");
 
// const publicKey = new PublicKey(suppliedPublicKey);
 
// const balanceInLamports = await connection.getBalance(publicKey);
 
// const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
 
// console.log(
//   `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
// );



// 도전과제1: 유효하지 않은 주소 예외 처리하기
// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// const suppliedPublicKey = process.argv[2];
// if (!suppliedPublicKey) {
//   throw new Error("Provide a public key to check the balance of!");
// }

// let publicKey;
// try {
//   publicKey = new PublicKey(suppliedPublicKey);
//   if (!PublicKey.isOnCurve(publicKey.toBytes())) {
//     throw new Error("The provided public key is not valid on the curve.");
//   }
// } catch (error) {
//   throw new Error(`Invalid public key provided: ${error.message}`);
// }

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// try {
//   const balanceInLamports = await connection.getBalance(publicKey);
//   const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
//   console.log(
//     `\✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOL!`
//   );
// } catch (error) {
//   console.error(`Failed to fetch balance: ${error.message}`);
// }



// 도전과제2: 유명한 지갑 확인해보기
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKeyString = "66YZZejVBupBnMwSEqTaCkAMwPacpPzP41GSEst55Kgz"

const publicKey = new PublicKey(publicKeyString)
 
const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
 
const balanceInLamports = await connection.getBalance(publicKey);
 
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
 
console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
);