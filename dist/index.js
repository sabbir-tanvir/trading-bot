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
require("dotenv").config();
// import { getTokenFromLLM } from "./get-token-from-llm";
const get_tweet_1 = require("./get-tweet");
// import { LAMPORTS_PER_SOL } from "@solana/web3.js";
// import { swap } from "./swap";
// const SOL_AMOUNT = 0.001 * LAMPORTS_PER_SOL;
function main(userName) {
    return __awaiter(this, void 0, void 0, function* () {
        const newTweets = yield (0, get_tweet_1.getTweet)(userName);
        console.log(newTweets);
        // for (let tweet of newTweets) {
        //     const tokenAddress = await getTokenFromLLM(tweet.contents)
        //     if (tokenAddress !== "null") {
        //         console.log(`trying to execute tweet => ${tweet.contents}`)
        //         await swap(tokenAddress, SOL_AMOUNT);
        //     }
        // }
    });
}
main("sabbir__tanvir");
