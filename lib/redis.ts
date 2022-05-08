import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function setURL(url: string) {
  const short = getRandomString();
  await redis.set(`short/${short}`, url);

  return short;
}

const getRandomString: () => string = () => {
  const charSet = "abcdefghijklmnopqrstuvwxyz".split("");

  const randomString = [...new Array(8)]
    .map((_) => charSet[Math.floor(Math.random() * charSet.length)])
    .join("");

  return randomString;
};
