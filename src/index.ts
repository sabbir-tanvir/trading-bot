require("dotenv").config();
import { getTokenFromLLM } from "./get-token";
import { getTweet } from "./get-tweet";
// import { LAMPORTS_PER_SOL } from "@solana/web3.js";
// import { swap } from "./swap";

// const SOL_AMOUNT = 0.001 * LAMPORTS_PER_SOL;

async function main(userName: string) {
    // const newTweets = await getTweet(userName);
    // console.log(newTweets)
    // for (let tweet of newTweets) {
    //     const tokenAddress = await getTokenFromLLM(tweet.contents)
    //     if (tokenAddress !== "null") {
    //         console.log(`trying to execute tweet => ${tweet.contents}`)
    //         await swap(tokenAddress, SOL_AMOUNT);
    //     }
    // }
    const tweetContent = `
        $SOLOTH is designed to be a Slow 🦥 Mooner 🚀 The Laziest Legend on Solana. 
@Solothsol


CA: J1m16cwJZqhaBPNQkrXTjsPis4tcuven4uM3Cf6JVJ3h

Chart: https://dexscreener.com/solana/5rr1dtzxktvqtvmyvucczgcmguwadfky31hcggrkxqpf

Buy: https://raydium.io/swap/?inputMint=sol&outputMint=J1m16cwJZqhaBPNQkrXTjsPis4tcuven4uM3Cf6JVJ3h
    `;
    const response = await getTokenFromLLM(tweetContent);
    console.log(response);
}

main("sabbir__tanvir");