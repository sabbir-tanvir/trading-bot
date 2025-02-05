
import { getTweet } from './get-tweet';
import { ThrowStatement } from 'typescript';


async function main(userName: string) {
    const newTweet = await getTweet(userName);
    console.log(newTweet);
    // for (tweet of newTweet) {
    //     await tokenAddress = await getTokenFromLLM(tweet.content);
    //     if (tokenAddress) {
    //         await txn = await createSwapIns();
    //         for (let i = 0; i < Spam_Count; i++) {
    //             sendTxn(txn);
    //         }
    //     }
    // }
}



main("elonmusk");
