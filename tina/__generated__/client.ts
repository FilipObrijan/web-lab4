import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '217e55c519a226f332ad2d480cfb96cbdc5176dc', queries,  });
export default client;
  