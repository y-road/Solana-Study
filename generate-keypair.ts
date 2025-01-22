// 키페어 생성
// import { Keypair } from "@solana/web3.js";
// const keypair = Keypair.generate();
// console.log(`✅ Generated keypair!`);



// 키페어 로그 찍어보기
// import { Keypair } from "@solana/web3.js";
 
// const keypair = Keypair.generate();
 
// console.log(`The public key is: `, keypair.publicKey.toBase58());
// console.log(`The secret key is: `, keypair.secretKey);
// console.log(`✅ Finished!`);



// SECRET_KEY 로드하기
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
 
const keypair = getKeypairFromEnvironment("SECRET_KEY");
 
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`,
);