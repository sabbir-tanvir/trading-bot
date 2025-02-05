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
const TWEET_MAX_COUNT = 60 * 1000;
function getTweet(userName) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        let config = {
            method: "GET",
            url: `https://twitter241.p.rapidapi.com/user-tweets?username=${userName}`,
            headers: {
                "x-rapidapi-host": "twitter241.p.rapidapi.com",
                "x-rapidapi-key": "007b97a9d5msh3d02e719153d8eep1d8f6cjsnd9c419b21663"
            }
        };
        try {
            const response = yield axios_1.default.request(config);
            const timelineResponse = (_d = (_c = (_b = (_a = response.data.data.user_result.result.timeline_response.timeline.instructions
                .find((x) => x.entry)) === null || _a === void 0 ? void 0 : _a.entry.content) === null || _b === void 0 ? void 0 : _b.itemContent) === null || _c === void 0 ? void 0 : _c.tweet_results) === null || _d === void 0 ? void 0 : _d.result;
            if (!timelineResponse) {
                return [];
            }
            const tweets = [{
                    id: timelineResponse.rest_id,
                    content: timelineResponse.legacy.full_text,
                    created_at: timelineResponse.legacy.created_at
                }];
            return tweets;
        }
        catch (error) {
            console.error("Error fetching tweets:", error);
            return [];
        }
    });
}
