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
        More and more liquidity is stacking up on the topside.
        Never short #Bitcoin during a bull market.
        The upcoming short squeeze will punish all the bears.
    `;
    const response = await getTokenFromLLM(tweetContent);
    console.log(response);
}

main("sabbir__tanvir");