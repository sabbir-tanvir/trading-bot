import axios from "axios";

const TWEET_MAX_TIME_MS = 24 * 60 * 60 * 1000;

interface Tweet {
    contents: string;
    id: string;
    createdAt: string;
}

export async function getTweet(userName: string): Promise<Tweet[]> {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://twitter-api45.p.rapidapi.com/timeline.php?screenname=${userName}`,
        headers: { 
            'x-rapidapi-host': 'twitter-api45.p.rapidapi.com', 
            'x-rapidapi-key': process.env.RAPID_API_KEY
        }
    };
  
    const response = await axios.request(config);
    const timelineResponse = response.data.timeline;
    
    const tweets: Tweet[] = [];
    
    timelineResponse.forEach((tweet: any) => {
        try {
            tweets.push({
                contents: tweet.text,
                id: tweet.tweet_id,
                createdAt: tweet.created_at
            });
        } catch (e) {
            console.error("Error parsing tweet: ", e);
        }
    });
    
    return tweets.filter(tweet => new Date(tweet.createdAt).getTime() > Date.now() - TWEET_MAX_TIME_MS);
}
