import type { NextApiRequest, NextApiResponse } from "next";
import { setURL } from "../../lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = req.body.url;
  const short = await setURL(url);

  res.status(200).json({ url, short });
}
