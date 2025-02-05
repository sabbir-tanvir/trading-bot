"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_tweet_1 = require("./get-tweet");
function main(userName) {
    return __awaiter(this, void 0, void 0, function* () {
        const newTweet = yield (0, get_tweet_1.getTweet)(userName);
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
    });
}
main("elonmusk");
