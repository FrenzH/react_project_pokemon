// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  name: string;
};
let props = {};
export default function getPokemon(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {}
