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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTweet = getTweet;
const axios_1 = __importDefault(require("axios"));
const TWEET_MAX_TIME_MS = 24 * 60 * 60 * 1000;
function getTweet(userName) {
    return __awaiter(this, void 0, void 0, function* () {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://twitter-api45.p.rapidapi.com/timeline.php?screenname=${userName}`,
            headers: {
                'x-rapidapi-host': 'twitter-api45.p.rapidapi.com',
                'x-rapidapi-key': process.env.RAPID_API_KEY
            }
        };
        const response = yield axios_1.default.request(config);
        const timelineResponse = response.data.timeline;
        const tweets = [];
        timelineResponse.forEach((tweet) => {
            try {
                tweets.push({
                    contents: tweet.text,
                    id: tweet.tweet_id,
                    createdAt: tweet.created_at
                });
            }
            catch (e) {
                console.error("Error parsing tweet: ", e);
            }
        });
        return tweets.filter(tweet => new Date(tweet.createdAt).getTime() > Date.now() - TWEET_MAX_TIME_MS);
    });
}
