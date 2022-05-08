import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function setURL(url: string) {
  const short = "abcdefg"; // getShort();
  await redis.set(`short/${short}`, url);

  return short;
}
