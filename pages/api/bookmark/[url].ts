import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = Awaited<ReturnType<typeof axios>>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url } = req.query;
  const decodedUrl = decodeURIComponent(url as string);

  const linkPreview = await axios.get(decodedUrl).then((res) => {
    return res.status;
  });

  res.status(200).json(linkPreview);
}
